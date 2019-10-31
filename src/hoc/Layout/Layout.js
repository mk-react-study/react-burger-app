import React, { Component, Fragment } from 'react'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
//import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <BurgerBuilder />
      </Fragment>
    )
  }
}

export default Layout
