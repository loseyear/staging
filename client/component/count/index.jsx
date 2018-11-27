import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { increase, decrease, async } from './action'

import s from './count.scss'

class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'increase'
    }
  }
  increase(n) {
    const { dispatch } = this.props
    dispatch(increase(1))
    this.setState({
      type: 'increase'
    })
  }
  decrease(n) {
    const { dispatch } = this.props
    dispatch(decrease(1))
    this.setState({
      type: 'DECREASE'
    })
  }
  async(n) {
    const { dispatch } = this.props
    const { type } = this.state
    dispatch(async(n, type))
  }

  render() {
    return (
      <div>
        <h2 className={s.count}>Some state changes:</h2>
        <div>{this.props.count}</div>
        <button onClick={() => this.increase(1)}>Increase</button>
        <button onClick={() => this.decrease(1)}>Decrease</button>
        <button onClick={() => this.async(1)}>Async</button>
      </div>
    )
  }
}

Count.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const { count } = state
  return { count }
}

export default connect(mapStateToProps)(Count)

