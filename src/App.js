import { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { BASE_URL, getCards } from './api/api';
import { CardsList } from './components/CardsList';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './App.css';

function App() {
  const [heading, setHeading] = useState('pets');
  const [cookies, setCookie, removeCookie] = useCookies(["requestId"]);
  const [requestId, setRequestId] = useState(cookies.requestId || '');
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const updateCards = async() => {
      const cardsToShow = await getCards(requestId);

      setProducts(cardsToShow);
    };

    updateCards();
  }, [requestId]);

  return (
    <div className="App">
      <h1 className="App__header">{heading}</h1>
      <div className="App__buttons">
        <button
          type="button"
          className="App__button"
          onClick={() => {
            setHeading('pets');
            setRequestId('4b20aa37-9e1a-4155-82e0-386d171cb1f0');
            removeCookie("requestId");
            setCookie("requestId", "4b20aa37-9e1a-4155-82e0-386d171cb1f0");
          }}
        >
          pets
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            setHeading('food');
            setRequestId('b0e78282-d457-4790-97f0-d5c0642bee4d');
            setCookie("requestId", "b0e78282-d457-4790-97f0-d5c0642bee4d")
          }}
        >
          food
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            setHeading('plants');
            setRequestId('10a827d5-13b5-4cd6-a2d0-9f22dd7738d1');
            removeCookie("requestId");
            setCookie("requestId", "4b20aa37-9e1a-4155-82e0-386d171cb1f0");
          }}
        >
          plants
        </button>
      </div>
      <CardsList products={products} />
    </div>
  );
}

export default App;
