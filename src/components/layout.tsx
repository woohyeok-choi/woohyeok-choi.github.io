import * as React from 'react'
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import '../layout.css'

export default ({children}: Props) => {
  return (
    <div>
      { children }
    </div>
  )
}

interface Props {
  children: React.ReactNode
}