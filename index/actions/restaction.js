import axios from "axios";
import { SUCCESS,FAIL} from "../constants/restconstants";

export const restList=()=>async (dispatch)=>{

    try
    {
        const {data}=await axios.get('/restaurants.json') //{data}is restructured and calles as data.restaurants , 
 //ie res.data.restaurants 

    console.log(data.restaurants);
    dispatch(
        {
            payload:data.restaurants,
            type:SUCCESS
        }
    )
    }
    catch(error){
        dispatch(
            {
                payload:error,
                type:FAIL
            }
        )

    }
}