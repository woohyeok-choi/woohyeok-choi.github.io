import * as React from "react"
import Slider from 'react-slick'
import { Button, Responsive } from "semantic-ui-react"

export default ({ items } : Props) => (
  <Slider
    slidesToShow={3}
    nextArrow={<div style={{right: '-10'}}><Button icon={'angle right'} circular/></div>}
    prevArrow={<div><Button icon={'angle left'} circular/></div>}
    className={'slide'}
    dots={true}
    infinite={false}
    responsive={
      [
        {
          breakpoint: Responsive.onlyTablet.maxWidth as number,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: false
          }
        },
        {
          breakpoint: Responsive.onlyMobile.maxWidth as number,
          settings: {
            arrows: false,
            slidesToShow: 1,
            dots: false
          }
        }
      ]
    }>
    {
      items.map(item => (
        <div className={'slide'}>
          {item}
        </div>
        )
      )
    }
  </Slider>
)

interface Props {
  items: Array<React.ReactNode>
}