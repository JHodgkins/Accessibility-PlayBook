import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({ baseDirectory: import.meta.dirname })

const config = [
  { ignores: ['.next/**', 'public/_pagefind/**', 'playwright-report/**', 'test-results/**'] },
  ...compat.extends('next/core-web-vitals'),
  { files: ['content/**/_meta.js'], rules: { 'import/no-anonymous-default-export': 'off' } }
]

export default config
