import * as React from "react"
import Slider from "react-slick"
import { Button } from "semantic-ui-react"

export default ({ items, showArrows, slidesShown } : Props) => {
    return (
      <Slider
        slidesToShow={slidesShown}
        arrows={showArrows}
        nextArrow={<div><Button icon={"angle right"} circular/></div>}
        prevArrow={<div><Button icon={"angle left"} circular/></div>}
        dots={true}
        infinite={false}>
        {
          items.map(item =>
            (
              <div className={"slide"}>
                {item}
              </div>
            )
          )
        }
      </Slider>
    )
  }


interface Props {
  items: Array<React.ReactNode>
  showArrows: boolean
  slidesShown: number
}

