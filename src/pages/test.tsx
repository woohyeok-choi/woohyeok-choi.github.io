import * as React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Index } from "elasticlunr"
import { Input } from "semantic-ui-react"

class Search extends React.Component<Props, State> {
  index?: Index = undefined

  state: State = {
    query: '',
    results: []
  }

  getOrCreateIndex = () => {
    const { index } = this.props
    return this.index ? this.index : Index.load(index)
  }

  handleChange = (value) => {
    this.index = this.getOrCreateIndex()
    console.log(value)
    this.setState({
      query: value,
      results: this.index.search(value, {
        expand: true
      }).map( ({ref, score}) => {
        console.log(score)
        return {ref, score}
      })
    })

    console.log(this.state.results)
  }

  render(): React.ReactNode {
    const { query } = this.state
    return (
      <div>
        <Input
          onChange={(_, {value}) => this.handleChange(value)}
          value={query}
        />
      </div>
    )
  }
}

export default () => {
  const { siteSearchIndex } : QueryResult = useStaticQuery(graphql`
      {
        siteSearchIndex {
          index
        }
      }`)
  return (
    <div>
      <Search index={siteSearchIndex.index}/>
    </div>
  )
}


interface QueryResult {
  siteSearchIndex : {
    index: object
  }
}

interface Props {
  index?: object
}

interface State {
  query?: string,
  results: Array<object>
}