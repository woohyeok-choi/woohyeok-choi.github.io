import { GatsbyImage } from "./GatsbyImage"

export interface MarkdownRemarkNodeType {
  node: {
    id?: string
    html?: string
    htmlAst?: string
    excerpt?: string
    frontmatter?: {
      title?: string
      date?: string
      description?: string
      category?: string
      tags?: Array<string>
      preview: {
        childImageSharp: {
          fluid?: GatsbyImage
          resize?: GatsbyImage
          fixed?: GatsbyImage
        }
      }
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
