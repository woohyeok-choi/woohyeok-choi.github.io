import * as React from 'react'

declare const Disqus : React.FunctionComponent<Props>

export interface Props {
  shortName: string
  url: string
  identifier: string
  title: string
}

export default Disqus