import React from 'react';

const CurrencyData = ({ data }) => {
    return (
        <div style={{ width: '50%', height: '100px', borderRadius: '5px', background: '#c7c7c7', margin: '10px' }}>
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
