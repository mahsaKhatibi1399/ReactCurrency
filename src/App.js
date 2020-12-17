import React, { useState, useEffect } from 'react';
import axios from "axios";
import CurrencyData from './CurrencyData';

function App() {

  const [value, setValue] = useState();

  const getDataHandler = () => {

    axios.get('https://currency.jafari.li/json')

      .then((resp) => {
        if (resp.status === 200) {

          setValue(resp.data)
        }
      })
  }
  console.log('value', value)
  useEffect(() => {
    async function getData() {
      await getDataHandler();
    }
    getData();
  }, [])


  return (
    <div style={{ backgroundColor: 'currentColor', height: '100%' }}>
      {value.Currency.map(data => <CurrencyData data={data} />)}
    </div>
  );
}

export default App;

