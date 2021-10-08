export interface PeopleInfo {
  name: string
  position: string
  desc: string
  imgSrc?: string
  contact?: string
  quote?: string
  path?: string
  nickname?: string
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
    nickname: 'suttipong-nickname',
    quote: 'and he will be happy to have a technology infused coffee with you anytime.',
    contact: 'suttipong-contact'
  },
  thomas: {
    name: 'shimmy-name',
    position: 'shimmy-position',
    desc: `shimmy-desc`,
    imgSrc: 'Thomas.png',
    nickname: 'shimmy-nickname',
    contact: 'shimmy-contact'
  },
  wichai: {
    name: 'wichai-name',
    position: 'wichai-position',
    desc: `wichai-desc`,
    nickname: 'wichai-nickname',
    imgSrc: 'wichai2X.png',
    contact: 'wichai-contact'
  },

  ponlawat: {
    name: 'ponlawat-name',
    position: 'ponlawat-position',
    nickname: 'ponlawat-nickname',
    desc: `ponlawat-desc`,
    imgSrc: 'oak2x.png',
    contact: null
  },

  suwanna: {
    name: 'suwanna-name',
    position: 'suwanna-position',
    desc: `suwanna-desc`,
    imgSrc: 'suwan2x.png',
    nickname: 'suwanna-nickname',
    contact: null
  },

  rattanapong: {
    name: 'rattanapong-name',
    position: 'rattanapong-position',
    desc: `rattanapong-desc`,
    imgSrc: 'pae2X.png',
    nickname: 'rattanapong-nickname',
    contact: null
  },
  nisita: {
    name: 'nisita-name',
    position: 'nisita-position',
    desc: `nisita-desc`,
    imgSrc: 'nisita.jpg',
    nickname: 'nisita-nickname',
    contact: null
  },
  phathsinee: {
    name: 'phathsinee-name',
    position: 'phathsinee-position',
    desc: `phathsinee-desc`,
    imgSrc: 'Aea.jpg',
    nickname: 'phathsinee-nickname',
    contact: null
  },
  natnicha: {
    name: 'natnicha-name',
    position: 'natnicha-position',
    desc: `natnicha-desc`,
    imgSrc: 'natnicha.jpg',
    nickname: 'natnicha-nickname',
    contact: null
  }
} as PeopleInfos
