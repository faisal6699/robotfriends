import React from 'react';

const Card = ({ id,name,email}) => {

	return (
		<div className="bg-light-green dib br1 pa1 ma1 grow bw2 shadow-3">
			<img alt='robots' src={`https://robohash.org/${id}?100*100`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);

}

export default Card;