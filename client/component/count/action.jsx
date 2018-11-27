import {
  INCREASE,
  DECREASE
} from './constant'

export function increase(n) {
  return {
    type: INCREASE,
    amount: n
  }
}

export function decrease(n) {
  return {
    type: DECREASE,
    amount: n
  }
}

export const async = (n, type) => dispatch => {
  if (type === 'increase') {
    setTimeout(function() {
      dispatch(increase(n))
    }, 1000)
  } else {
    setTimeout(function() {
      dispatch(decrease(n))
    }, 1000)
  }
}

