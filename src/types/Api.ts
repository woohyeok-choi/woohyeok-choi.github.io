interface PageInput {
  path: string
  component: string
  layout?: string
  context?: any
}

interface NodeFieldInput {
  node: object
  name: string
  value: string
}

interface BoundActionCreators {
  createPage: (page: PageInput) => void
  deletePage: (page: PageInput) => void
  createRedirect: (
    opts: {
      fromPath: string
      isPermanent?: boolean
      redirectInBrowser?: boolean
      toPath: string
    }
  ) => void
}

export type GatsbyCreatePages = (
  fns: { graphql: any; boundActionCreators: BoundActionCreators }
) => void