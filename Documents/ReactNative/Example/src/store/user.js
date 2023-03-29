import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import { navigate } from '../navigation/RootNavigation'

// import { addStorage, getStorage, removeStorage } from '../utils/storage'
// import { API } from '../utils/constant'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loginLoading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setLoginLoading: (state, action) => {
      state.loginLoading = action.payload
    },
  },
})

export default userSlice.reducer

export const { setUser, setLoginLoading } = userSlice.actions

export const login = () => async dispatch => {
  dispatch(setLoginLoading(true))

  axios
    .post('url_here', {})
    .then(res => {
      const data = res.data
      console.log('data login: ', data)
    })
    .catch(err => console.log('err login: ', err.response))
    .finally(() => dispatch(setLoginLoading(false)))
}
