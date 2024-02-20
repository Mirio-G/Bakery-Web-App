import Logo from './assets/react.svg'
import "./style/App.css";
import JsonDataDisplay from './components/Table.tsx';

import { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
    const [breadItems, setBreadItems] = useState([]);
    const [drinkItems, setDrinkItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const breadsResponse = await axios.get('http://localhost:5000/route/breads');
                setBreadItems(breadsResponse.data);

                const drinksResponse = await axios.get('http://localhost:5000/route/drinks');
                setDrinkItems(drinksResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        /*<div className="container">

            <h2>Breads:</h2>
            <div>
				{breadItems.map((item, idx) => (
                    <div key={idx}>{item.type}</div>
                ))}
            </div>

            <h2>Drinks:</h2>
            <div>
                {drinkItems.map((item, idx) => (
                    <div key={idx}>{item.type}</div>
                ))}
            </div>
			
        </div>
		*/
		null
    );
}

export default Test;