import React from 'react'
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

interface CounterProps {
  value: number,
  renderTitle: (value: number) => string,
  renderLabel: (value: number) => string,
}
const Counter = ({ value, renderTitle, renderLabel }: CounterProps) => {
  const { fps, durationInFrames } = useVideoConfig()
  const currentFrame = useCurrentFrame()
  const interpolatedValue = interpolate(
    currentFrame,
    [0, durationInFrames - fps ],
    [0, value],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    })
  return (
	<div style={{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
    gap: '32px'
	}}
	>
		<div style={{
      textAlign: 'center',
      fontSize: 70,
      lineHeight: 1.5
		}}
		>
			{renderLabel(Math.floor(interpolatedValue))}
		</div>
		<div style={{
      textAlign: 'center',
      fontSize: 90,
      lineHeight: 1.5,
      fontWeight:'bold'
		}}
		>
			{renderTitle(Math.floor(interpolatedValue))}
		</div>
	</div>
)
}

export default Counter