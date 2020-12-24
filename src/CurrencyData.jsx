import React from 'react';
import './CurrencyDataStyle.css';

const CurrencyData = ({ data }) => {
    return (
        <div className='container'>
            <div>
                <span> {data.title} </span>
            </div>
            <div>
                <div className='col'>
                    <span> قیمت : </span>
                    <span>  {data.p} تومان </span>
                </div>
                <div className='col'>
                    <span> حداکثر قیمت امروز: </span>
                    <span>{data.h} تومان </span>
                </div>
                <div className='col'>
                    <span>  حداقل قیمت امروز: </span>
                    <span>{data.l} تومان </span>
                </div>
            </div>
            <div>
                <span> آخرین تغییرات : </span>
                <span>{data.updated_at}</span>
            </div>

        </div>
    )
}

export default CurrencyData;
