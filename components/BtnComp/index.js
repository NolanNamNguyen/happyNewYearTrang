import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'



const BtnComp = ({
    btnState,
    btnId,
    mouseOnFunction
}) => {
    const [currentPos, setCurrentPos] = useState();
    const [currentId, setCurrentId] = useState(1);
    const router = useRouter()

    const noBtnClick = (e) =>{
        router.push('/OMG')
    }
  
    return (
        <button  onClick={btnState? null : noBtnClick} onMouseEnter={btnState? mouseOnFunction : null} id={btnId} className={btnState? 'yesBttn myBtn hvr-wobble-skew' : 'noBtn myBtn hvr-wobble-skew'}>
            {btnState? 'Yes' : 'No'}
        </button>
    );
}

export default BtnComp;