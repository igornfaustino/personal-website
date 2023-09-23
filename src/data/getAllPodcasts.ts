import parse from 'rss-to-json'

export const getAllPodcasts = async () => {
  return (await parse('https://anchor.fm/s/157bfc7c/podcast/rss'))
    .items as Item[]
}

type Item = {
  id: string
  title: string
  description: string
}
