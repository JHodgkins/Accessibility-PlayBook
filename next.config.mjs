import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: { light: 'github-light-high-contrast', dark: 'github-dark-high-contrast' }
    }
  }
})

export default withNextra({
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.jsx'
    }
  }
})
