import * as React from "react"
import * as _ from "lodash"

class ScreenSizeListenableComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      screenSize: "computer"
    }

    const { onScreenChange } = this.props

    if (onScreenChange) {
      this.onResize = _.throttle(this.onResize, 100)
    }
  }

  componentDidMount() {
    const initSize = getSize(window.innerWidth, this.props)

    this.setState({
      screenSize: initSize
    })

    const { onScreenChange } = this.props
    if (onScreenChange) {
      onScreenChange(initSize)
      window.addEventListener("resize", this.onResize)
    }
  }

  componentWillUnmount() {
    const { onScreenChange } = this.props
    if (onScreenChange) {
      this.onResize.cancel()
      window.removeEventListener("resize", this.onResize)
    }
  }

  onResize: any = () => {
    const newSize = getSize(window.innerWidth, this.props)
    const { screenSize } = this.state
    const { onScreenChange } = this.props

    if (newSize !== screenSize) {
      this.setState({
        screenSize: newSize,
      })

      if (onScreenChange) {
        onScreenChange(newSize)
      }
    }
  }

  render() {
    const { onScreenChange } = this.props

    return (
      
    )
  }
}



type ScreenSize = "mobile" | "tablet" | "computer"

interface State {
  screenSize: ScreenSize
}

export interface Props {
  mobile?: number
  tablet?: number
  children: React.ReactNode
  onScreenChange?: (ScreenSize) => void
}

const defaultOptions: Props = {
  mobile: 767,
  tablet: 991
}

const getSize = (width: number, option: Props = defaultOptions): ScreenSize => {
  const { mobile, tablet } = option

  if (width < mobile) {
    return "mobile"
  } else if (width < tablet) {
    return "tablet"
  } else {
    return "computer"
  }
}