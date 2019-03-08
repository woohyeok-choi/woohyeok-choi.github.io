export interface PublicationType {
  id?: string
  type: string
  title: string
  authors: string
  publisher: string
  abbrev?: string
  year: string
  volume?: string
  issue?: string
  pages?: string
  doi?: string
  bibtexFile?: {
    name?: string
    publicURL?: string
  }
  paperFile?: {
    name?: string
    publicURL?: string
  }
  posterFile?: {
    name?: string
    publicURL?: string
  }
  slideFile?: {
    name?: string
    publicURL?: string
  }
  videoFile?: {
    name?: string
    publicURL?: string
  }
  appendixFile?: {
    name?: string
    publicURL?: string
  }
  videoLink?: string
  github?: string
}