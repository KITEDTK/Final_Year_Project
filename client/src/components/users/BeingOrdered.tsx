import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
export const BeingOrdered = () => {
    const dispatch = useAppDispatch();
    const auth = useAppSelector((state)=> state.auth.auth);
    useEffect(()=>{
        if(auth?.id){
            socket.emit("join_user", { userId: auth.id });
        }
    },[dispatch, auth])
    return(<></>);
}