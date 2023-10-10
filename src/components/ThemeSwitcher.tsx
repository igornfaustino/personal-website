'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	const baseInteractionStyle =
		'cursor-pointer transition-all hover:scale-110 hover:text-theme-primary h-6 w-6';

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<RiSunLine
					className={baseInteractionStyle}
					role="button"
					onClick={() => setTheme('light')}
				/>
			);
		} else {
			return (
				<RiMoonLine
					className={baseInteractionStyle}
					role="button"
					onClick={() => setTheme('dark')}
				/>
			);
		}
	};

	return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
