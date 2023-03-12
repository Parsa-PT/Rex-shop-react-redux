import { legacy_createStore as createStore } from 'redux';
import { combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer } from './reducer/productReducer';
import { productPageList } from './reducer/productPageReducer';
import { CartReducer } from './reducer/cartReducer';


const middleware = [thunk]

const reducer = combineReducers({
    productsList : productListReducer,
    productsPageList : productPageList,
    cart : CartReducer,

})

const cartItemLocalStorage = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [];

const initioalState = {

    cart : {cartItem:cartItemLocalStorage}
}

const store = createStore(reducer , initioalState , applyMiddleware(...middleware))


export default store