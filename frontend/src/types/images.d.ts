// Ambient module declarations for static image imports (e.g. `import x from
// '@/assets/images/x.png'`). Next.js normally provides these via the
// auto-generated, gitignored next-env.d.ts — but that file only exists after
// `next dev`/`next build` has run at least once. CI's typecheck step never
// runs either, so without this committed file `tsc` can't resolve image
// imports on a fresh checkout even though it works on any machine that's
// already run the dev server.

declare module '*.png' {
  const content: import('next/image').StaticImageData
  export default content
}

declare module '*.jpg' {
  const content: import('next/image').StaticImageData
  export default content
}

declare module '*.jpeg' {
  const content: import('next/image').StaticImageData
  export default content
}

declare module '*.webp' {
  const content: import('next/image').StaticImageData
  export default content
}

declare module '*.svg' {
  const content: import('next/image').StaticImageData
  export default content
}
