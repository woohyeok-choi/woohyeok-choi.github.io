import * as React from "react"
import { Responsive, Menu, Sidebar, Container } from "semantic-ui-react"
import { Link } from "react-scroll"
import Footer from '../common/footer'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyComputer.minWidth as number : window.innerWidth
}

class DesktopContainer extends React.Component<Props, State> {
  state: State = {
    activeItem: this.props.menuItems[0].key,
    isSidebarOpened: false,
  }

  handleActive = (activeItem: string) => this.setState({ activeItem })

  render(): React.ReactNode {
    const { activeItem } = this.state
    const { menuItems, children } = this.props

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyComputer.minWidth}>
        <Menu secondary pointing fixed={"top"} inverted style={{ backgroundColor: "#1b1c1d" }}>
          <Container>
            <Menu.Item header content={"CHOI, WOOHYEOK"} style={{ fontSize: "1.5em", lineHeight: "0.1em" }}/>
            {menuItems.map(({ name, key }, index) =>
              <Menu.Item
                key={key}
                as={Link}
                name={key}
                position={index === 0 ? "right" : undefined}
                active={activeItem === key}
                content={name}
                to={key}
                spy={true}
                smooth={true}
                duration={500}
                offset={index === 0 ? -50 : -20}
                onSetActive={this.handleActive}
              />)}
          </Container>
        </Menu>
        <div style={{ paddingTop: "3.0em" }}>
          {children}
        </div>
      </Responsive>
    )
  }
}

class MobileContainer extends React.Component<Props, State> {
  state: State = {
    activeItem: this.props.menuItems[0].key,
    isSidebarOpened: false,
  }

  handleActive = (activeItem: string) => this.setState({ activeItem } )

  handleHide = () => this.setState({ isSidebarOpened: false })

  handleToggle = () => this.setState({ isSidebarOpened: true })

  handleClick = () => this.setState({ isSidebarOpened: false })

  render(): React.ReactNode {
    const { activeItem, isSidebarOpened } = this.state
    const { menuItems, children } = this.props

    return (
      <Responsive getWidth={getWidth} maxWidth={Responsive.onlyTablet.maxWidth}>
        <Menu secondary pointing fixed={"top"} inverted style={{ backgroundColor: "#1b1c1d" }}>
          <Container>
            <Menu.Item key={"sidebar"} onClick={this.handleToggle} icon={"sidebar"}/>
            <Menu.Item key={"header"} header content={"CHOI, WOOHYEOK"} position={"right"}
                       style={{ fontSize: "1.5em", lineHeight: "0.1em" }}/>
          </Container>
        </Menu>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}

            animation={"push"}
            inverted
            vertical
            fixed={"left"}
            onHide={this.handleHide}
            visible={isSidebarOpened}
            style={{ paddingTop: "3.0em", zIndex: 50 }}
          >
            {menuItems.map(({ name, key }, index) =>
              <Menu.Item
                key={key}
                as={Link}
                onClick={this.handleClick}
                name={key}
                active={activeItem === key}
                content={name}
                to={key}
                delay={250}
                spy={true}
                smooth={true}
                duration={500}
                offset={index === 0 ? -50 : -20}
                onSetActive={this.handleActive}
              />)}
          </Sidebar>
          <Sidebar.Pusher dimmed={isSidebarOpened}>
            <div style={{ paddingTop: "3.0em" }}>
              {children}
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

export default ({ children, menuItems } : Props) => (
  <div>
    <DesktopContainer menuItems={menuItems} children={children}/>
    <MobileContainer menuItems={menuItems} children={children}/>
    <Footer/>
  </div>
)

interface Props {
  children?: React.ReactNode
  menuItems: Array<{
    name: string
    key: string
  }>
}

interface State {
  activeItem?: string
  isSidebarOpened?: boolean
}