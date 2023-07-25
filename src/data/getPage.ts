import { getAllPages } from './getAllPages'

export async function getPage(title: string) {
  const pages = await getAllPages()
  return pages.find((page) => page.spotlightTitle === title)
}
