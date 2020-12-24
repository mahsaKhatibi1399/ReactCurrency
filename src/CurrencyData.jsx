import React from 'react';
import './CurrencyDataStyle.css';

const CurrencyData = ({ data }) => {
    return (
        <div className='container'>
            <div>
                <span> {data.title} </span>
            </div>
            <div>
                <span> قیمت : </span>
                <span>  {data.p} تومان </span>

                <span> حداکثر قیمت : </span>
                <span>{data.h}</span>

                <span> حداقل قیمت : </span>
                <span>{data.l}</span>
            </div>
            <div>
                <span> آخرین تغییرات : </span>
                <span>{data.updated_at}</span>
            </div>

        </div>
    )
}

export default CurrencyData;
