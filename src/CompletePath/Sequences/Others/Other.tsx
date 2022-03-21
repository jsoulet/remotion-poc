import React from 'react'
import { Img, interpolate, random, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import { Person } from './type'

interface OtherProps {
  person: Person,
  shift: number
}

function randomInt({min, max}: {min: number, max: number}, seed: string | number) { // min and max included 
  return Math.floor(random(`${seed}-${min}-${max}`) * (max - min + 1) + min)
}

const PADDING = 30;
const usePosition = (person: Person) => {
  const seed = (name: string) => `${person.avatar}-${person.name}-${person.id}-${name}`
  const { width, height } =  useVideoConfig()
  const size = randomInt({ min: 150, max: 500}, seed('size'));
  const left = randomInt({ min: PADDING, max: width - size - PADDING}, seed('left'))
  const top = randomInt({ min: PADDING, max: height - size - PADDING}, seed('top'))
  return {
    left,
    top,
    height: size,
    width: size,
  }
}

const Other = ({person, shift = 0}: OtherProps) => {
  const position = usePosition(person)
  const frame = useCurrentFrame()
  const {fps} = useVideoConfig()
  const opacity = interpolate(frame, [0 + shift, (fps*1) + shift , (fps*3) + shift ], [0, 1, 0])
  const scaleSpring = spring({frame: frame - shift, fps, config: {
    damping: 20,
    mass: 5
  } })
  // const scaleSpring =  spring({frame, fps })
  const scale = interpolate(scaleSpring, [0, 1], [1.2, 1])
  return  (
	<div>
		<Img
			src={person.avatar} style={{
      ...position,
      position: 'absolute',
      borderRadius: '100%',
      opacity,
      transform: `scale(${scale})`,
      boxShadow: '0 10px 30px 0 rgb(0 0 0 / 0.1), 0 10px 20px -10px rgb(0 0 0 / 0.1)',
			}}/>
		{/* <div>{person.name}</div> */}
	</div>
)
}

export default Other