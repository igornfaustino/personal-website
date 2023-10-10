'use client';
import { PageItem } from '@/data/getAllPages';
import { useKBar } from 'kbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher';

type Props = {
	pages: PageItem[];
};

export default function HeaderClient({ pages }: Props) {
	const pathname = usePathname();
	const { query } = useKBar();

	const baseInteractionStyle =
		'cursor-pointer transition-all hover:scale-110 hover:text-theme-primary';

	const pageBaseStyle = baseInteractionStyle + ' hidden md:block';

	const activeStyle = 'text-theme-primary hover:scale-105 hidden md:block';

	const allPagesWithLinks = pages.filter((page) => page.url);

	return (
		<div className="container flex min-h-[80px] items-center justify-between px-4">
			<div className="flex w-fit items-center py-4 text-theme-grey">
				{pathname !== '/' && (
					<Link
						href="/"
						className="max-w-fit cursor-pointer rounded-sm bg-theme-grey px-3 py-1 text-sm font-semibold uppercase text-slate-100  transition-all hover:scale-105 hover:text-theme-primary dark:bg-slate-100 dark:text-theme-grey hover:dark:text-theme-primary sm:text-lg"
					>
						igor n faustino
					</Link>
				)}
			</div>
			<div className="flex w-fit items-center justify-end gap-8">
				{allPagesWithLinks.map((page) => (
					<Link
						key={page.url}
						href={`/${page.url}`}
						className={pathname == `/${page.url}` ? activeStyle : pageBaseStyle}
					>
						{page.spotlightTitle}
					</Link>
				))}

				<div className="ml-4 hidden min-h-[30px] items-center border-l border-slate-400 dark:border-slate-700 md:block" />

				<div onClick={query.toggle} className={baseInteractionStyle}>
					<FaSearch />
				</div>

				<ThemeSwitcher />
			</div>
		</div>
	);
}
