import React, { useState, useEffect } from 'react';
import axios from "axios";
import CurrencyData from './CurrencyData';

function App() {

  const [value, setValue] = useState(null);

  const getDataHandler = () => {

    axios.get('https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json')

      .then((resp) => {
        if (resp.status === 200) {
          console.log('res', resp.data.sana.data)
          setValue(resp.data.sana.data)
        }
      })
      .catch(err => console.log('errors', err))
  }

  useEffect(() => {
    async function getData() {
      await getDataHandler();
    }
    getData();
  }, [])


  return (
    <div style={{ backgroundColor: 'currentColor', height: '100%' }}>
      <div style={{ padding: '1px' }} >
        {!!value ? value.map(data => <CurrencyData key={data.slug} data={data} />) : ''}
      </div>
    </div>
  );
}

export default App;

