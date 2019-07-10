import * as React from "react"
import * as _ from "lodash"

export const withScreenSize = <T extends object>(WrappedComponent: React.ComponentType<T>, options: ScreenSizeOption = defaultOptions) =>
  class extends React.Component<T, State> {
    constructor(props) {
      super(props)
      this.state = {
        screenSize: "computer"
      }

      this.onResize = _.throttle(this.onResize, 100)
    }

    componentDidMount() {
      this.setState({
        screenSize: getSize(window.innerWidth, options),
      })
      window.addEventListener("resize", this.onResize)
    }

    componentWillUnmount() {
      this.onResize.cancel()
      window.removeEventListener("resize", this.onResize)
    }

    onResize: any = () => {
      const newSize = getSize(window.innerWidth, options)
      const { screenSize } = this.state

      if (newSize !== screenSize) {
        this.setState({
          screenSize: newSize,
        })
      }
    }

    render(): React.ReactNode {
      return (
        <WrappedComponent {...this.props} screenSize={this.state.screenSize}/>
      )
    }
  }

export type ScreenSize = "mobile" | "tablet" | "computer"

export type DetailedScreenSize = 'mobile-s'
interface State {
  screenSize: ScreenSize
}

export interface ScreenSizeOption {
  mobile?: number
  tablet?: number
}

const defaultOptions: ScreenSizeOption = {
  mobile: 767,
  tablet: 991
}

const getSize = (width: number, option: ScreenSizeOption = defaultOptions): ScreenSize => {
  const { mobile, tablet } = option

  if (width < mobile) {
    return "mobile"
  } else if (width < tablet) {
    return "tablet"
  } else {
    return "computer"
  }
}