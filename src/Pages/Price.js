import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Price (props) {

  // state to hold the coin data
  const [coin, setCoin] = useState(null);

  // our api key from coinapi.io 
  // const apiKey = 'input api key here';

  // Grabbing the currency symbol from the URL Params 
  const params = useParams();
  const {symbol} = params;

  // Using the other two variables to create our URL
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${process.env.REACT_APP_COINAPI_KEY}`;
    
  //function to fetch coin data
  const getCoin = async() => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCoin(data);
    } catch (e) {
      console.log('ERROR FETCHING DATA', e);
    }
  }

  // runs as soon as the component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // show the fetched data
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };
  
  // Function for when data doesnt exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
    return coin && coin.rate ? loaded() : loading(); 
  };