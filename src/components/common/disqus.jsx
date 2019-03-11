import React from 'react'
import PropTypes from 'prop-types'
import { CommentCount, DiscussionEmbed } from "disqus-react"

class Disqus extends React.Component {
  render() {
    const { shortName } = this.props
    const config = {
      url: this.props.url,
      identifier: this.props.identifier,
      title: this.props.title
    }

    return (
      <div>
        <DiscussionEmbed shortname={shortName} config={config}/>
      </div>
    )
  }
}


Disqus.propTypes = {
  shortName: PropTypes.string,
  url: PropTypes.string,
  identifier: PropTypes.string,
  title: PropTypes.string
}

export default Disqus