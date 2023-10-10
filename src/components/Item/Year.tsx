interface YearProps {
	start: string;
	end?: string;
}

export default function Year({ start, end }: YearProps) {
	const formattedStart = start;
	const formattedEnd = end || 'Present';

	return (
		<div>
			{formattedStart} - {formattedEnd}
		</div>
	);
}
