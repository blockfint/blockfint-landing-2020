export const getCategory = (tags) => {
  return tags.find(({ visibility }) => visibility === 'public')
}
