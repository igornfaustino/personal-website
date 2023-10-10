'use client';
import { useKBar } from 'kbar';
import { useEffect, useState } from 'react';
import Keyboard from './Keyboard';

export default function GetStartedClientButton() {
	const [agent, setAgent] = useState<'Other' | 'Mobile' | 'Mac'>('Other');

	const { query } = useKBar();

	useEffect(() => {
		if (/(Mac)/i.test(navigator.userAgent)) setAgent('Mac');
		else if (/iPhone|iPad|Android/i.test(navigator.userAgent))
			setAgent('Mobile');
		else setAgent('Other');
	}, []);

	const getButtonText = () => {
		if (agent === 'Mobile') {
			return <>Tap to start →</>;
		} else if (agent === 'Mac') {
			return (
				<>
					Press <Keyboard>⌘</Keyboard> + <Keyboard>K</Keyboard> to start →
				</>
			);
		} else {
			return (
				<>
					Press <Keyboard>ctrl</Keyboard> + <Keyboard>K</Keyboard> to start →
				</>
			);
		}
	};

	return (
		<button
			onClick={query.toggle}
			className="text-theme-primary transition-all hover:scale-105"
		>
			{getButtonText()}
		</button>
	);
}
