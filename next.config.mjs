import nextMdx from '@next/mdx'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
})

export default withMDX({
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
})
