import { HYGRAPH_API } from '@/common/API';
import { JsonResponseType } from '@/common/JsonResponseType';
import { TIME } from '@/common/Time';

const cacheTime = 10 * TIME.MINUTE;

export async function getAllPosts() {
	const response = await fetch(HYGRAPH_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			query: `{
                posts(orderBy: date_DESC) {
                    id
                    slug
                    title
                    description
                    date
                    content
                    coverImage {
                      url
                      width
                      height
                    }
                }
            }`,
		}),
		next: {
			revalidate: cacheTime,
		},
	});
	const { data }: JsonResponseType<{ posts: PostItem[] }> =
		await response.json();
	return data.posts;
}

export type PostItem = {
	id: string;
	slug: string;
	title: string;
	description: string;
	date: string;
	content: string;
	coverImage: {
		url: string;
		width: number;
		height: number;
	};
};
