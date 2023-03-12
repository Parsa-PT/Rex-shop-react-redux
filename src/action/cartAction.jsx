import axios from "axios";


export const AddtoCart = ({id})=> async (dispatch , getState)=>{
    const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)
    dispatch({
        type:'CART_ADD_ITEM',
        payload: {
            product: data._id,
            name : data.name,
            image : data.image,
            price : data.price,
        }
    })

localStorage.setItem('cartItem' , JSON.stringify(getState().cart.cartItem) )

}



export const RemoveCart = (id)=> (dispatch , getState)=>{
    dispatch({
        type : 'REMOVE_FROM_CART',
        payload : id
    })

    localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItem))
}