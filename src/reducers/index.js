import authReducer from './auth.reducers'
import userReducer from './user.reducers'
import productReducer from './product.reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	product: productReducer,
})

export default rootReducer
