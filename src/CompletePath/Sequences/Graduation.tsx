import React from 'react'
import {interpolate, Img, useCurrentFrame, useVideoConfig} from 'remotion';
interface GraduationProps {
  path: string
  partner?: string
  pathImage?: string
}
const Graduation = ({ path, pathImage, partner = 'OpenClassrooms'}: GraduationProps) => {
  const { fps, durationInFrames } = useVideoConfig()
  const currentFrame = useCurrentFrame()
  const pathImageY = interpolate(
    currentFrame,
    [0, durationInFrames/4, (durationInFrames/4)*2, (durationInFrames/4)*3, durationInFrames ],
    [0, 32, 0, 24, 0],
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
		<h1 style={{
      textAlign: 'center',
      fontSize: 70,
      lineHeight: 1.5
		}}
		>
			{
      ['You just graduated', `"${path}"`, `by ${partner}`]
      .map((t, index, array) => {
        const animationDuration = Math.floor((durationInFrames - 0.5 * fps) / array.length)
        const startFrame = index * (animationDuration)
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
          transform: `translateY(${translateY}px)`,
          ...(index === 1 ? {
            fontSize: 90,
            fontWeight: 'bold',
          }: {})
		}}
	> {t} 
	</div>
)
      })}
		</h1>
		<Img
			src={pathImage} style={{
      transform: `translateY(${pathImageY}px)`,
			}}/>
	</div>
)
}

export default Graduation