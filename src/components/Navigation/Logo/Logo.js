import React, { Fragment } from 'react'

import burgerLogo from '../../../assets/images/burger-logo.png'
import './Logo.css'

const logo = props => (
  <Fragment>
    <a className='navbar-brand' href='#test'>
      <img src={burgerLogo} alt='MyBurger' id='logo' />
    </a>
  </Fragment>
)

export default logo
