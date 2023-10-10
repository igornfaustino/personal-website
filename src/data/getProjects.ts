import { HYGRAPH_API } from '@/common/API';
import { JsonResponseType } from '@/common/JsonResponseType';
import { TIME } from '@/common/Time';

const cacheTime = 10 * TIME.MINUTE;

export async function getProjects() {
	const response = await fetch(HYGRAPH_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			query: `{
                projects(orderBy: publishedAt_DESC) {
                    title
                    description
                    link
                }
            }`,
		}),
		next: {
			revalidate: cacheTime,
		},
	});
	const { data }: JsonResponseType<{ projects: ProjectItem[] }> =
		await response.json();
	return data.projects;
}

type ProjectItem = {
	id: string;
	title: string;
	link: string;
	description: string;
};
