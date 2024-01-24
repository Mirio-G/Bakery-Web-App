import Logo from './assets/react.svg'
import "./App.css";
import JsonDataDisplay from './components/Table.tsx';

import { useEffect, useState } from 'react'
import axios from 'axios';

function Test() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getItems = async () => {
			const response = axios.get('http://localhost:5000/test');

			await response.then((res) => {
				setItems(res.data.name);
			})
		};

		getItems();
	},[]);	

	console.log(items);

    return (
        <div className="App">
        	{items.map((item, idx) => (
    		<div key={idx}>
    			{items[idx].type}
    		</div>))}
        </div>
    );
}
 
export default Test;