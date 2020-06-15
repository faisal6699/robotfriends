import React from 'react';

const Card = ({ id,name,email}) => {
	const Url = 'https://robohash.org/'

	return (
		<div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
			<img alt='robots' src={`${Url}${id}` } className='w-50'/>
			<div>
				<h5>{name}</h5>
				<p>{email}</p>
			</div>
		</div>
	);

}

export default Card;