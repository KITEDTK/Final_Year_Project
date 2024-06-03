import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { resetLocalCarts } from "../features/carts/cartsSlice";

export const DoneCheckout = () =>{
    const dispatch = useAppDispatch();
    const auth = useAppSelector((state)=> state.auth.auth);
    useEffect(()=>{
        if(!auth && auth === null){
            dispatch(resetLocalCarts());
        }
    },[]);
    return(<>
    Cảm ơn bạn đã mua hàng của chúng tôi
    </>)
}