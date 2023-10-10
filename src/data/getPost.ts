import { HYGRAPH_API } from '@/common/API';
import { JsonResponseType } from '@/common/JsonResponseType';
import { TIME } from '@/common/Time';
import { PostItem } from './getAllPosts';

const cacheTime = 10 * TIME.MINUTE;

export async function getPost(slug: string) {
	const response = await fetch(HYGRAPH_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			query: `{
            post(where: {slug: "${slug}"}) {
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
	const { data }: JsonResponseType<{ post: PostItem }> = await response.json();
	return data.post;
}
