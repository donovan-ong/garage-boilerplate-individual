'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema, type LoginInput } from '@/lib/validations/auth'
import { FullPageSpinner } from '@/components/shared/LoadingSpinner'
import { getSafeRedirect } from '@/lib/utils'

export default function SignInPage() {
  const router = useRouter()
  const { user, loading, signInWithEmail, signInWithGoogle } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    if (!loading && user) {
      router.replace(getSafeRedirect(window.location.search, '/team'))
    }
  }, [loading, user, router])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('verification') === 'sent') {
      toast.success('Verification email sent. Verify your email, then sign in.')
    }
  }, [])

  if (loading) return <FullPageSpinner />

  const onSubmit = async (data: LoginInput) => {
    try {
      await signInWithEmail(data.email, data.password)
      toast.success('Signed in successfully')
      router.replace(getSafeRedirect(window.location.search, '/team'))
      router.refresh()
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('email-not-verified')) {
        toast.error('Please verify your email before signing in.')
      } else {
        toast.error('Invalid email or password')
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      router.replace(getSafeRedirect(window.location.search, '/team'))
    } catch {
      toast.error('Google sign-in failed. Please try again.')
    }
  }

  return (
    <div className="mx-auto w-full max-w-[580px] scale-110 rounded-[15px] border-4 border-brand-900 bg-brand-50 px-8 py-6 shadow-2xl">
      <div className="space-y-1 text-center">
        <h1 className="font-baloo text-[36px] font-semibold leading-[48px] tracking-tight text-brand-900">
          Sign In
        </h1>
        <p className="font-baloo text-[15px] font-semibold leading-[22px] text-brand-500">
          Enter your credentials to continue
        </p>
      </div>

      <div className="mt-5 space-y-4">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="relative mx-auto flex h-[45px] w-[275px] items-center justify-center rounded-[15px] bg-brand-500 px-4 transition-colors hover:bg-brand-600"
        >
          <span className="font-baloo text-[18px] font-bold leading-[28px] text-neutral-100">
            Continue with Google
          </span>
          <svg className="absolute right-4 h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#FFFFFF"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#FFFFFF"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FFFFFF"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#FFFFFF"
            />
          </svg>
        </button>

        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-[200px] bg-brand-300" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">OR</span>
          <span className="h-px w-[200px] bg-brand-300" aria-hidden="true" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex w-[460px] max-w-full flex-col items-center space-y-4">
          {/* Email Field */}
          <div className="group w-full space-y-1">
            <label
              htmlFor="email"
              className="text-[15px] font-semibold text-brand-900 transition-colors group-focus-within:text-brand-500"
            >
              Email
            </label>
            <div className="flex h-[45px] w-full items-center rounded-[15px] border-2 border-brand-900 bg-brand-100 px-4 transition-colors focus-within:border-brand-500">
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="h-full w-full bg-transparent text-[18px] font-normal text-brand-900 placeholder:text-neutral-900/60 focus:outline-none"
                placeholder="you@example.com"
                {...register('email')}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="text-xs text-red-500" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="group w-full space-y-1">
            <label
              htmlFor="password"
              className="text-[15px] font-semibold text-brand-900 transition-colors group-focus-within:text-brand-500"
            >
              Password
            </label>
            <div className="flex h-[45px] w-full items-center rounded-[15px] border-2 border-brand-900 bg-brand-100 px-4 transition-colors focus-within:border-brand-500">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
                className="h-full w-full bg-transparent text-[18px] font-normal text-brand-900 placeholder:text-neutral-900/60 focus:outline-none"
                placeholder="••••••••"
                {...register('password')}
              />
            </div>
            {errors.password && (
              <p id="password-error" className="text-xs text-red-500" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="font-baloo block h-[42px] w-[245px] rounded-[8px] bg-brand-500 px-4 text-[18px] font-bold text-neutral-100 transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="mx-auto mt-2 w-full text-center text-sm font-semibold text-brand-900">
          <span className="text-brand-500">Don&apos;t have an account? </span>
          <Link href="/auth/signup" className="font-baloo text-brand-900">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}