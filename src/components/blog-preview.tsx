import * as React from 'react'
import { Card } from "semantic-ui-react"
import BlogItem from "./BlogItem"
import { BlogItemData } from "../data"

class BlogPreview extends React.Component<Props> {
  render(): React.ReactNode {
    const {nShow, items} = this.props
    return (
      <Card.Group centered>
        {
          items.map(item => <BlogItem data={item}/>)
        }
      </Card.Group>
    )
  }
}

interface Props {
  nShow?: number
  items: Array<BlogItemData>
}

export default BlogPreview
