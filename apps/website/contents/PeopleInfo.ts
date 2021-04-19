export interface PeopleInfo {
  name: string
  position: string
  desc: string
  imgSrc?: string
  contact?: string
  quote?: string
  path?: string
}
interface PeopleInfos {
  [name: string]: PeopleInfo
}

export const peopleInfos = {
  suttipong: {
    name: 'suttipong-name',
    position: 'suttipong-position',
    desc: `suttipong-desc`,
    imgSrc: 'num2X.png',
    contact: 'suttipong-contact',
    quote: 'and he will be happy to have a technology infused coffee with you anytime.'
  },
  thomas: {
    name: 'shimmy-name',
    position: 'shimmy-position',
    desc: `shimmy-desc`,
    imgSrc: 'Thomas.png',
    contact: 'shimmy-contact'
  },
  wichai: {
    name: 'wichai-name',
    position: 'wichai-position',
    desc: `ponlawat-desc`,
    imgSrc: 'wichai2X.png',
    contact: 'ponlawat-contact'
  },

  ponlawat: {
    name: 'suwanna-name',
    position: 'suwanna-position',
    desc: `suwanna-desc`,
    imgSrc: 'oak2x.png'
  },

  suwanna: {
    name: 'suwanna-name',
    position: 'suwanna-position',
    desc: `suwanna-desc`,
    imgSrc: 'suwan2x.png'
  },

  rattanapong: {
    name: 'rattanapong-name',
    position: 'rattanapong-position',
    desc: `rattanapong-desc`,
    imgSrc: 'pae2X.png'
  }
} as PeopleInfos
