import { SettingsResponse } from '@tryghost/content-api'
import { ghostApi } from '.'
export async function getMeta(): Promise<SettingsResponse> {
  try {
    return await ghostApi.settings.browse()
  } catch (error) {
    return { title: null, description: null, og_image: null, og_title: null, og_description: null } as SettingsResponse
  }
}
