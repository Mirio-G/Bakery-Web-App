import React, { useState } from 'react';

interface CardProps {
	topping: string;
}


const dropdown = ({topping}: CardProps) => {
	if(topping == null){
		return null;
	}

	console.log(topping);

	return (
		<div>
            <select className="card-pop-custom" name="Customize">
                {topping.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
	)
}

export default dropdown