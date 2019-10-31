import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './BurgerIngredient.css'
class BurgerIngredient extends Component {
  render() {
    let ingredient = null

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div id='bread-bottom'>bread-bottom</div>
        break
      case 'bread-top':
        ingredient = (
          <div id='bread-top'>
            bread-top
            <div id='seeds1'></div>
            <div id='seeds2'></div>
          </div>
        )
        break
      case 'meat':
        ingredient = <div id='meat'>meat</div>
        break
      case 'cheese':
        ingredient = <div id='cheese'>cheese</div>
        break
      case 'bacon':
        ingredient = <div id='bacon'>bacon</div>
        break
      case 'salad':
        ingredient = <div id='salad'>salad</div>
        break
      default:
        ingredient = null
    }

    return ingredient
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient
