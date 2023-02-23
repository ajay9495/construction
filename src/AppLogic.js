
import { useState } from "react";

export default function AppLogic(){

    const[ModalState, setModalState]  = useState("closed");



    function openModal(){
        setModalState("open");
    }

    function submitModal(e){
        e.preventDefault();

        setModalState("submitting");
        
        setTimeout(() => {
            setModalState("submitted");
        }, 3000);

        console.log("hello time out");
    }

    function closeModal(){
        setModalState("closed");
    }

    return{
        ModalState, openModal, closeModal, submitModal
    }

}
