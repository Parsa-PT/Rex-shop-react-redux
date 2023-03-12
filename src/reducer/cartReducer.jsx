export const CartReducer = (state = {cartItem : []} , action)=>{
    switch(action.type){
        case 'CART_ADD_ITEM':
            const item = action.payload


       const existingItem =  state.cartItem.find(
        (i)=> i.product === item.product 
        )

        if(existingItem){
            return {
                ...state,
                cartItem : state.cartItem.map((i)=>{
                 return   i.product === existingItem.product ? item : i
                })
            }
        }else{
            return{
                ...state,
                cartItem : [...state.cartItem , item]
            }
        }
        
         case 'REMOVE_FROM_CART' :
            return {
                ...state,
                cartItem : state.cartItem.filter((i) => i.product !== action.payload),
            }

        default : return state


    }
}