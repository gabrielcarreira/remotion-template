import React from 'react';
import {interpolate, useCurrentFrame, Easing} from 'remotion';
import {COLOR_1, FONT_FAMILY} from './constants';

const subtitle: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontSize: 40,
	textAlign: 'center',
	position: 'absolute',
	bottom: 140,
	width: '100%',
};

const codeStyle: React.CSSProperties = {
	color: COLOR_1,
	fontWeight: 900,
};

interface EaseConfig {
	easing: (v: number) => number;
	extrapolateLeft: 'clamp' | 'extend' | 'identity' | undefined;
	extrapolateRight: 'clamp' | 'extend' | 'identity' | undefined;
}

export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const ease: EaseConfig = {
		easing: Easing.bezier(0, 1, 0, 1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	};
	const duration = 45;

	const opacity = interpolate(frame, [0, duration], [0, 1], ease);
	const blur = interpolate(frame, [0, duration], [10, 0], ease);
	const y = interpolate(frame, [0, duration], [20, 0], ease);
	return (
		<div
			style={{
				...subtitle,
				opacity,
				filter: `blur(${blur}px)`,
				transform: `translateY(${y}px)`,
			}}
		>
			crie vídeos com <code style={codeStyle}>ReactJS </code>
		</div>
	);
};
