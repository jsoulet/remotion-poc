import React from 'react'
import { Sequence, useCurrentFrame } from "remotion";
import { Lottier } from "remotion-lottie";
import data from "./lottieData.json";

const Fireworks = () => {

  return (
	<div style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
    background: 'white'
	}}
	><Lottier stayAtLastFrame data={data} fitMode="fitToWidth" />
	</div>
)
}

export default Fireworks