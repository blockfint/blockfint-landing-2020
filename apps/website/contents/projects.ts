export interface Benefit {
  iconSrc: string
  title: string
  description: string
}

export interface ProjectInfo {
  logoSrc: string
  tags: string[]
  title: string
  description: string
  linkHref: string
  benefits: Benefit[]

  imgSrc?: string
  youtube?: string
}
interface ProjectInfos {
  [projectName: string]: ProjectInfo
}

export const projectInfos = {
  ndid: {
    logoSrc: 'Ndid.png',
    tags: ['national-platform'],
    title: 'ndid-title',
    description: 'ndid-desc',
    linkHref: 'https://www.ndid.co.th/',
    benefits: [
      {
        iconSrc: 'NDID/identify.svg',
        title: 'ndid-icon1-label',
        description: 'ndid-icon1-desc'
      },
      {
        iconSrc: 'NDID/Promote-online-self-service.svg',
        title: 'ndid-icon2-label',
        description: 'ndid-icon2-desc'
      },
      {
        iconSrc: 'NDID/data-sharing.svg',
        title: 'ndid-icon3-label',
        description: 'ndid-icon3-desc'
      }
    ]
  },

  thila: {
    logoSrc: 'KTB.png',
    tags: ['financial', 'digital-bond'],
    title: 'thila-title',
    description: 'thila-desc',
    linkHref:
      'https://www.posttoday.com/finance-stock/news/626168?fbclid=IwAR3Ji9Aibjlnj2cW2DGx5UnkDtZimMarxam1vGJ7x62FviiuT4POfIVAEpY',
    benefits: [
      {
        iconSrc: 'KTB/Efficient.svg',
        title: 'thila-icon1-label',
        description: 'thila-icon1-desc'
      },
      {
        iconSrc: 'KTB/Enhance.svg',
        title: 'thila-icon2-label',
        description: 'thila-icon2-desc'
      },
      {
        iconSrc: 'KTB/Promote.svg',
        title: 'thila-icon3-label',
        description: 'thila-icon3-desc'
      }
    ]
  },

  fiderser: {
    logoSrc: 'Fiderser.png',
    tags: ['traceability', 'agriculture'],
    title: 'fiderser-title',
    description: 'fiderser-desc',
    linkHref:
      'http://www.efinancethai.com/LastestNews/app.index.aspx?id=K1pTQ3Frd2luSVE9&year=2020&month=1&lang=T&v=2018&security=EA',
    benefits: [
      {
        iconSrc: 'Fideser/prevent.svg',
        title: 'fiderser-icon1-label',
        description: 'fiderser-icon1-desc'
      },
      {
        iconSrc: 'Fideser/manage.svg',
        title: 'fiderser-icon2-label',
        description: 'fiderser-icon2-desc'
      },
      {
        iconSrc: 'Fideser/transparent.svg',
        title: 'fiderser-icon3-label',
        description: 'fiderser-icon3-desc'
      }
    ]
  },

  cu: {
    logoSrc: 'Cu.png',
    tags: ['energy-trading', 'national-platform'],
    title: 'cu-title',
    description: 'cu-desc',
    benefits: [
      {
        iconSrc: 'CU-MEA-EA/Contract.svg',
        title: 'cu-icon1-label',
        description: 'cu-icon1-desc'
      },
      {
        iconSrc: 'CU-MEA-EA/Marketing.svg',
        title: 'cu-icon2-label',
        description: 'cu-icon2-desc'
      },
      {
        iconSrc: 'CU-MEA-EA/P2P.svg',
        title: 'cu-icon3-label',
        description: 'cu-icon3-desc'
      }
    ],
    linkHref: 'https://gideon.energy/en/news/5f193869523e6a00018b836a'
  },
  tbma: {
    tags: ['financial', 'digital-bond'],
    logoSrc: 'BMA.png',
    title: 'tbma-title',
    description: 'tbma-desc',
    linkHref: 'https://www.efinancethai.com/LastestNews/LatestNewsMain.aspx?release=y&ref=M&id=MDU4V0owV3FqeHM9',
    youtube: 'MFx0YepF7QE',
    benefits: [
      {
        title: 'tbma-icon1-label',
        description: 'tbma-icon1-desc',
        iconSrc: 'TBMA/shorten.svg'
      },
      {
        title: 'tbma-icon2-label',
        description: 'tbma-icon2-desc',
        iconSrc: 'TBMA/DLT.svg'
      },
      {
        title: 'tbma-icon3-label',
        description: 'tbma-icon3-desc',
        iconSrc: 'TBMA/Efficiency.svg'
      }
    ]
  }
} as ProjectInfos
