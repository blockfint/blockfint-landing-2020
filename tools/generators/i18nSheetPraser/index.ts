import { Tree, logger } from '@nrwl/devkit'
import { GoogleSpreadsheet } from 'google-spreadsheet'
const fs = require('fs')
const path = require('path')
const keys = require('./key.json')

interface Schema {
  name: string
}
export default async function (host: Tree, schema: Schema) {
  const doc = new GoogleSpreadsheet('1nKvK2A723Lw_U6CgQ31_yN0kLd4BEEAwOPd4NyQtg1Y')

  await doc.useServiceAccountAuth({
    client_email: keys.client_email,
    private_key: keys.private_key
  })
  await doc.loadInfo() // loads document properties and worksheets

  const result = sheetConfigs.map(async ({ name, output }, index) => {
    const sheet = doc.sheetsByIndex[index]
    console.log('Loading sheet 📑 ', name)
    const data = await sheet.getRows()
    const locales = ['en', 'th']

    const mappedData = data.reduce(
      (acc, { ID, ...rest }) => {
        if (ID) {
          return {
            ...acc,
            //@ts-ignore
            ...Object.fromEntries(
              locales.map((locale) => [
                locale,
                {
                  ...(acc[locale] ?? {}),
                  [ID]: rest[locale.toUpperCase()]
                }
              ])
            )
          }
        } else return acc
      },
      { en: {}, th: {} }
    )

    locales.forEach((locale) => {
      const jsonData = JSON.stringify(mappedData[locale], null, 2)
      const rawPath = `apps/${schema.name}/locales/${locale}/${output}.json`
      fs.writeFileSync(path.resolve(rawPath), jsonData)
      console.table(mappedData[locale])
      console.log(`output: ${rawPath} result: `)
    })
    return index
  })
  await Promise.all(result)
  logger.info('Create All file success')

  return () => {}
}

const sheetConfigs = [
  {
    name: '00-Common',
    output: 'common'
  },
  {
    name: '00-Mainpage',
    output: 'home'
  }
]
