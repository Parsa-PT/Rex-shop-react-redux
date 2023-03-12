import axios from "axios";


export  const productPageAction = ({id})=> async (dispatch)=>{


    try{

        dispatch({type : 'PRODUCT_PAGE_REQUEST'})


        const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)


        dispatch({
            type : 'PRODUCT_PAGE_SUCCESS',
            payload : data
        })


    }catch(error){
        console.log(error)
    }

}