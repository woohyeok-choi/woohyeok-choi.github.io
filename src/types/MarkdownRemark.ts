interface MarkdownRemarkNode {
  node: {
    id?: string
    html?: string
    excerpt?: string
    frontmatter?: {
      title?: string
      date?: string
      time?: string
      description?: string
      preview?: string
      category?: string
      tags?: Array<string>
    }
    fields?: {
      slug?: {
        origin?: string
        alias?: string
      }
      category?: {
        name?: string
        slug?: string
      }
      tags?: Array<{
        name?: string
        slug?: string
      }>
    }
  }
}
