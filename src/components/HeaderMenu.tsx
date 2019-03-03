import * as React from "react"
import { Menu } from "semantic-ui-react"

class HeaderMenu extends React.Component<{}, State> {
  state: State = {
    activeItem: 'about'
  }

  handleMenuItemClick = (e, {name}) => { this.setState({activeItem: name}) }

  render(): React.ReactNode {
    const { activeItem } = this.state
    return (
      <Menu pointing={true} secondary={true} stackable={true} >
        <Menu.Item header>
          WOOHYEOK CHOI
        </Menu.Item>
        <Menu.Item position={'right'} name={'about'} active={activeItem === 'about'} onClick={this.handleMenuItemClick}>
          ABOUT
        </Menu.Item>
        <Menu.Item name={'items'} active={activeItem === 'items'} onClick={this.handleMenuItemClick}>
          PUBLICATIONS
        </Menu.Item>
        <Menu.Item name={'research'} active={activeItem === 'research'} onClick={this.handleMenuItemClick}>
          RESEARCH
        </Menu.Item>
        <Menu.Item name={'academic-services'} active={activeItem === 'academic-services'} onClick={this.handleMenuItemClick}>
          ACADEMIC SERVICES
        </Menu.Item>
        <Menu.Item name={'affiliations'} active={activeItem === 'affiliations'} onClick={this.handleMenuItemClick}>
          AFFILIATIONS
        </Menu.Item>
        <Menu.Item name={'blog'} active={activeItem === 'blog'} onClick={this.handleMenuItemClick}>
          BLOG
        </Menu.Item>
      </Menu>
    )
  }
}

interface State {
  activeItem?: string
}

interface Props {
  menuItems: Array<{
    title: string
    link: string
  }>
}

export default HeaderMenu
