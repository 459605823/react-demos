import axios from 'axios'

export const getData = (url, getAction, dispatch, addData) => {
  axios.get(url).then((res) => {
    const data = res.data
    if (data.success) {
      const action = getAction(data.data, addData)
      dispatch(action)
    }
  }).catch(() => {
    console.log('请求失败，请重试')
  })
}