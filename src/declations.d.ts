declare module 'disqus-react' {
  export class DiscussionEmbed extends React.Component<{
    shortname: string,
    config: {
      url?: string
      identifier?: string
      title?: string
    }
  }, {}> { }
}

declare module 'elasticlunr' {
  export class Index {
    search (query: string, config: object) : Array<{
      ref: string | number,
      score: number
    }>
    documentStore: DocumentStore
  }

  export class DocumentStore {
    getDoc(docRef: number | string) : DocumentStore
  }

  export namespace Index {
    function load (serialisedData: object) : Index
  }
}