import React from 'react'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig, spring, Easing} from 'remotion';

const SpinningLogo = () => {
  const frame = useCurrentFrame();
	const { fps } = useVideoConfig()
	const opacity = interpolate(frame, [0, fps * 0.5], [0, 1])
	const scale = interpolate(frame, [0, fps * 1], [0.8, 1], {
		extrapolateRight: "clamp",
	})
	const rotationDriver = spring({
		frame,
		fps,
		config: {
			mass: 2,
			stiffness: 500,
		}
	})
	const rotation = interpolate(rotationDriver, [0, 1], [180, 360 * 2], {
		
	})
  return (
	<div style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%'
	}}
	>
		<svg
			style={{
				opacity,
				transform: `rotate(${rotation}deg) scale(${scale})`
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="330"
			height="419"
			viewBox="0 0 330 419"
			fill="none"
		>
			<path d="M330 209.47C329.996 248.116 319.394 286.007 299.365 318.956C279.336 351.905 250.66 378.627 216.508 396.169C182.356 413.71 144.058 421.388 105.849 418.353C67.6394 415.317 31.0062 401.688 0 378.97L70.1951 294.654C85.2207 303.977 102.441 309.089 120.08 309.463C137.719 309.837 155.137 305.46 170.539 296.782C185.94 288.104 198.766 275.441 207.694 260.099C216.623 244.756 221.33 227.289 221.33 209.5C221.33 191.711 216.623 174.244 207.694 158.902C198.766 143.559 185.94 130.896 170.539 122.218C155.137 113.54 137.719 109.163 120.08 109.537C102.441 109.911 85.2207 115.023 70.1951 124.346L0 40.0299C31.0062 17.3124 67.6394 3.6826 105.849 0.647395C144.058 -2.38781 182.356 5.2898 216.508 22.8314C250.66 40.3731 279.336 67.0955 299.365 100.044C319.394 132.993 329.996 170.884 330 209.53V209.47Z" fill="#7451EB"/>
		</svg>
	</div>
	
)
}

export default SpinningLogo