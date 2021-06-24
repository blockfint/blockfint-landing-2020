import { Tag } from '@tryghost/content-api'

export const getCategory = (tags: Tag[]): Tag => {
  return tags?.find(({ visibility }) => visibility === 'public')
}
