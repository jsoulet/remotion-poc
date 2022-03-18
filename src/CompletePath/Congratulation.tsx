import React from 'react'
import {interpolate,  useCurrentFrame, useVideoConfig} from 'remotion';

interface CongratulationProps {
  text: string
  splitSymbol?: string
  backgroundColor?: string
}
const Congratulation = ({ text, splitSymbol = ' ', backgroundColor='#FFF' }: CongratulationProps) => {
  // const text = 'Congratulation Noémie'
  const { fps, durationInFrames } = useVideoConfig()
  const currentFrame = useCurrentFrame()
  return (
	<div style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
    background: backgroundColor,
	}}
	>
		<h1 style={{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 100,
      lineHeight: 1.5
		}}
		>
			{text.split(splitSymbol).map((t, index, array) => {
        const animationDuration = Math.floor(durationInFrames / array.length) - fps * 0.5
        const startFrame = index * (animationDuration - (0.5 * fps))
        const endFrame = (index + 1) * animationDuration
        const opacity = interpolate(currentFrame, [startFrame, endFrame], [0, 1], {
          extrapolateRight: "clamp",
          extrapolateLeft: "clamp",
        })
        const translateY = interpolate(currentFrame, [startFrame, endFrame], [50, 0], {
          extrapolateRight: "clamp",
          extrapolateLeft: "clamp",
        })
        return (
	<div
		key={index} style={{
          opacity,
          transform: `translateY(${translateY}px)`
		}}
	> {t} 
	</div>
)
      })}
		</h1>
	</div>
)
}

export default Congratulation