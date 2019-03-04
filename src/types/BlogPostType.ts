export interface BlogItemData {
  id?: string
  datetime?: string
  title: string
  category?: {
    name: string
    slug?: string
  }
  tags?: Array<{
    name: string
    slug?: string
  }>
  preview?: string
  content?: string
  description?: string
  slug?: string
}