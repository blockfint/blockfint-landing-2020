import { ghostApi } from '.'

export const getTags = async () => {
  return await ghostApi.tags.browse()
}
