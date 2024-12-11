import React from 'react';

function Map({ lat, lon }) {
	const zoom = 15;
	return (
		<div className="aspect-square rounded-md overflow-hidden">
			<inframe
				src={`//maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
				loading="lazy"
				allowfullscreen
				referrerPolicy="no-referrer-when-downgrade"
				className="w-full h-full"
			></inframe>
		</div>
	);
}

export default Map;
