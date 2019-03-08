import * as React from 'react'

const hoverColor = {
  boxColor: 'rgba(0, 0, 0, .87)',
  textColor: 'rgba(255, 255, 255, .9)'
}

const defaultColor = {
  boxColor: 'rgba(255, 255, 255, 0)',
  textColor: 'rgba(0, 0, 0, .6)'
}

const invertedHoverColor = {
  boxColor: 'rgba(255, 255, 255, .9)',
  textColor: 'rgba(0, 0, 0, .85)'
}

const invertedDefaultColor = {
  boxColor: 'rgba(255, 255, 255, 0)',
  textColor: 'rgba(255, 255, 255, .9)'
}

const shadowColor = 'rgba(0, 0, 0, .13)'

const invertedShadowColor = 'rgba(255, 255, 255, .9)'

export default class LinkedSpan extends React.Component<Props, State> {
  state: State = {
    isMouseOn: false
  }

  handleMouseEnter = () => this.setState({isMouseOn: true})

  handleMouseLeave = () => this.setState({isMouseOn: false})

  render(): React.ReactNode {
    const { children, inverted = false } = this.props
    const { isMouseOn } = this.state

    const lineColor = inverted ? invertedShadowColor : shadowColor

    const color = inverted ? (
      isMouseOn ? invertedHoverColor : invertedDefaultColor
    ) : (
      isMouseOn ? hoverColor : defaultColor
    )

    return(
      <span style={{backgroundColor: color.boxColor, boxShadow: `inset 0 -2px 0px 0px ${lineColor}`, color: color.textColor }} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        { children }
      </span>
    )
  }

}

interface Props {
  children: React.ReactNode
  inverted?: boolean
}

interface State {
  isMouseOn: boolean
}