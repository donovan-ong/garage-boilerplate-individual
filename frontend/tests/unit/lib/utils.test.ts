import { describe, it, expect } from 'vitest'
import { cn, truncate, getSafeRedirect } from '@/lib/utils'

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('px-2 py-1', 'text-sm')).toBe('px-2 py-1 text-sm')
  })

  it('resolves tailwind conflicts (last wins)', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('handles conditional classes', () => {
    expect(cn('base', false && 'skipped', 'included')).toBe('base included')
  })
})

describe('truncate', () => {
  it('returns string unchanged when shorter than limit', () => {
    expect(truncate('hello', 10)).toBe('hello')
  })

  it('truncates and appends ellipsis when over limit', () => {
    expect(truncate('hello world', 5)).toBe('hello…')
  })

  it('returns full string when exactly at limit', () => {
    expect(truncate('hello', 5)).toBe('hello')
  })
})

describe('getSafeRedirect', () => {
  it('returns the redirect path when it is a safe same-site path', () => {
    expect(getSafeRedirect('?redirect=%2Fteam')).toBe('/team')
  })

  it('falls back to /dashboard when there is no redirect param', () => {
    expect(getSafeRedirect('')).toBe('/dashboard')
  })

  it('falls back to a custom default when given one', () => {
    expect(getSafeRedirect('', '/notes')).toBe('/notes')
  })

  it('rejects a protocol-relative redirect (open redirect via //)', () => {
    expect(getSafeRedirect('?redirect=%2F%2Fevil.com')).toBe('/dashboard')
  })

  it('rejects a redirect that does not start with a slash', () => {
    expect(getSafeRedirect('?redirect=evil.com')).toBe('/dashboard')
  })

  it('rejects an absolute external URL', () => {
    expect(getSafeRedirect('?redirect=https%3A%2F%2Fevil.com')).toBe('/dashboard')
  })
})
