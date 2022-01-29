import React from 'react';
import {useNavigate} from 'react-router-dom';
export default function Subnavbar() {
    let navigate = useNavigate();
    const routeChange=()=>{
        let path = "CreateOrder";
        navigate(path);
    }
    return(
        <div className='subnavbar'>
            <div className='title-subnavbar1 one'>
                <p className='title-subnavbar'>Order | 0</p>
            </div>
            <div className='create-order one'>
                <button className='create' onClick={routeChange}>Create</button>
                <input type="text" className='search'></input>
            </div>
        </div>
    );
}