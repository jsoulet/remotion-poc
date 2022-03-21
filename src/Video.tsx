import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import CompletePath from './CompletePath';
// import {Logo} from './HelloWorld/Logo';
// import {Subtitle} from './HelloWorld/Subtitle';
// import {Title} from './HelloWorld/Title';

const [WIDTH, HEIGHT] = [1080, 1920]
const FPS = 30

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={5 * FPS}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="CompletePath"
				component={CompletePath}
				durationInFrames={42 * FPS}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
			/>
			{/* <Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Subtitle"
				component={Subtitle}
				durationInFrames={100}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
			/> */}
		</>
	);
};
