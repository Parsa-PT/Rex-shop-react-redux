export const productPageList = (state = { selectPro :[]} , action)=>{ 

    switch(action.type){
        case 'PRODUCT_PAGE_REQUEST':
            return{
                loading : true,
                selectPro : []
            }

         case 'PRODUCT_PAGE_SUCCESS':
            return {
                loading : false ,
                selectPro : action.payload
            }   

        default : return state    
    }

}