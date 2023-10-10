import { PostItem, getAllPosts } from '@/data/getAllPosts';
import { MetadataRoute } from 'next';

const EXTERNAL_DATA_URL = 'https://nfaustino.com';

// type PostSlug = { slug: string }

// function generateSiteMap(posts: PostSlug[]) {
//   return `<?xml version="1.0" encoding="UTF-8"?>
//    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//      <url>
//        <loc>${EXTERNAL_DATA_URL}</loc>
//      </url>
//      <url>
//         <loc>${EXTERNAL_DATA_URL}/about</loc>
//      </url>
//      <url>
//         <loc>${EXTERNAL_DATA_URL}/blog</loc>
//      </url>
// 		 <url>
//         <loc>${EXTERNAL_DATA_URL}/projects</loc>
//      </url>
//      <url>
//         <loc>${EXTERNAL_DATA_URL}/podcast</loc>
//      </url>
//      ${generatePostsMap(posts)}
//    </urlset>
//  `
// }

// function SiteMap() {
//   // getServerSideProps will do the heavy lifting
// }

// export const getServerSideProps: GetServerSideProps = async ({ res }) => {
//   const { data } = await client
//     .query<AllPostsQuery>(AllPostsDocument)
//     .toPromise()
//   const posts = data?.posts || []

//   // We generate the XML sitemap with the posts data
//   const sitemap = generateSiteMap(posts)

//   res.setHeader('Content-Type', 'text/xml')
//   // we send the XML to the browser
//   res.write(sitemap)
//   res.end()

//   return {
//     props: {},
//   }
// }

// export default SiteMap

const generatePostsMap = (posts: PostItem[]) =>
	posts.map(({ slug }) => ({
		url: `${`${EXTERNAL_DATA_URL}/blog/${slug}`}`,
	}));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getAllPosts();
	return [
		{
			url: EXTERNAL_DATA_URL,
		},
		{
			url: `${EXTERNAL_DATA_URL}/about`,
		},
		{
			url: `${EXTERNAL_DATA_URL}/blog`,
		},
		{
			url: `${EXTERNAL_DATA_URL}/projects`,
		},
		{
			url: `${EXTERNAL_DATA_URL}/podcast`,
		},
		...generatePostsMap(posts),
	];
}
