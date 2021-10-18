import axios from 'axios'
import * as actionTypes from './actionTypes'

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const ret = res.data.data
      if (ret) {
        const action = changeLoginStatus(ret)
        dispatch(action)
      } else {
        alert('登录失败')
      }
    })
  }
}

export const changeLoginStatus = (value) => {
  return {
    type: actionTypes.CHANGE_LOGIN_STATUS,
    value
  }
}