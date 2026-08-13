import { describe, it, expect } from 'vitest'
import { NextRequest } from 'next/server'
import { proxy } from '@/proxy'

function requestTo(path: string, { sessionCookie }: { sessionCookie?: string } = {}) {
  const req = new NextRequest(new URL(path, 'http://localhost:3000'))
  if (sessionCookie) {
    req.cookies.set('__session', sessionCookie)
  }
  return req
}

describe('proxy', () => {
  describe('protected routes without a session', () => {
    it.each(['/dashboard', '/notes', '/team', '/profile', '/settings'])(
      'redirects %s to /auth/signin with a redirect param',
      (path) => {
        const res = proxy(requestTo(path))
        expect(res.status).toBe(307)
        const location = new URL(res.headers.get('location')!)
        expect(location.pathname).toBe('/auth/signin')
        expect(location.searchParams.get('redirect')).toBe(path)
      }
    )
  })

  describe('protected routes with a session', () => {
    it.each(['/dashboard', '/notes', '/team', '/profile', '/settings'])(
      'lets %s through',
      (path) => {
        const res = proxy(requestTo(path, { sessionCookie: 'valid-session' }))
        expect(res.headers.get('x-middleware-next')).toBe('1')
      }
    )
  })

  describe('auth routes', () => {
    it('redirects an already-authenticated user away from /auth/signin', () => {
      const res = proxy(requestTo('/auth/signin', { sessionCookie: 'valid-session' }))
      expect(res.status).toBe(307)
      expect(new URL(res.headers.get('location')!).pathname).toBe('/dashboard')
    })

    it('lets an unauthenticated user reach /auth/signin', () => {
      const res = proxy(requestTo('/auth/signin'))
      expect(res.headers.get('x-middleware-next')).toBe('1')
    })
  })

  describe('public routes', () => {
    it('lets an unauthenticated user reach the landing page', () => {
      const res = proxy(requestTo('/'))
      expect(res.headers.get('x-middleware-next')).toBe('1')
    })
  })
})
