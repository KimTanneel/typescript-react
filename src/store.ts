// import { applyMiddleware } from 'redux'
import { appReducer } from './store/reducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: appReducer })
export default store
