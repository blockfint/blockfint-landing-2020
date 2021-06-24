export interface Benefit {
  iconSrc: string;
  title: string;
  description: string;
}

export interface ProjectInfo {
  logoSrc: string;
  tags: string[];
  title: string;
  description: string;
  linkHref: string;
  benefits: Benefit[];

  imgSrc?: string;
  youtube?: string;
}
interface ProjectInfos {
  [projectName: string]: ProjectInfo;
}

export const projectInfos = {
  ndid: {
    logoSrc: 'Ndid.png',
    tags: ['National Platform'],
    title: 'Digital Identity for all',
    description:
      'Provides a flexible and advanced method of authenticating a citizen’s identity online. The Platform embraces innovative technologies including distributed ledger, federated proxy, multi-level assurance and application of various authentication tools.',
    linkHref: 'https://www.ndid.co.th/',
    benefits: [
      {
        iconSrc: 'NDID/identify.svg',
        title: 'Identify and Verification',
        description:
          'To be an important digital infrastructure system designed under the decentralized concept that will help make electronic transactions more effective, reliable and achieve international standards.',
      },
      {
        iconSrc: 'NDID/Promote-online-self-service.svg',
        title: 'Promote Online Self Service',
        description:
          'To provide services in real time through online channels; elevate their service to customers through various channels; makes their service more efficient; and reduces management costs.',
      },
      {
        iconSrc: 'NDID/data-sharing.svg',
        title: 'Data Sharing',
        description:
          'To support data exchange between organizations that systematically connects all parties without the repetition of complex authentication, as owners of the information, consent must provided before any further action.',
      },
    ],
  },

  thila: {
    logoSrc: 'KTB.png',
    tags: ['Financial', 'Digital Bond'],
    title: 'PDMO readies 2nd batch of 1-baht savings bonds',
    description: `The Public Debt Management Office (PDMO) is set to allocate the second batch of the one-baht face value savings bonds after the first lot sold out.

    The imminent tranche will be offered to general investors through Krungthai Bank's e-wallet, the same as the previous lot, said Patricia Mongkhonvanit, director-general of PDMO.

    With the e-wallet, people, particularly the younger generation and the elderly, can more easily access the distribution channel.`,
    linkHref:
      'https://www.posttoday.com/finance-stock/news/626168?fbclid=IwAR3Ji9Aibjlnj2cW2DGx5UnkDtZimMarxam1vGJ7x62FviiuT4POfIVAEpY',
    benefits: [
      {
        iconSrc: 'KTB/Efficient.svg',
        title: 'Efficient',
        description:
          'the users’ financial transaction, storage and analysis data system.',
      },
      {
        iconSrc: 'KTB/Enhance.svg',
        title: 'Enhance',
        description: 'the efficiency of each department under the corporate.',
      },
      {
        iconSrc: 'KTB/Promote.svg',
        title: ' Plant the structure',
        description: 'of digital business into the society.',
      },
    ],
  },

  fiderser: {
    logoSrc: 'Fiderser.png',
    tags: ['Traceability', 'Agriculture'],
    title:
      'Blockfint Launches South-East Asia’s First Blockchain Platform For Palm Oil Traceability',
    description:
      'World’s first blockchain based platform for crude palm oil traceability. This pioneering solution helps PCM manufacturers to “connect the dots” across the supply-chain and trace the raw material from farm to factory, ensuring transparency and safety.',
    linkHref:
      'http://www.efinancethai.com/LastestNews/app.index.aspx?id=K1pTQ3Frd2luSVE9&year=2020&month=1&lang=T&v=2018&security=EA',
    benefits: [
      {
        iconSrc: 'Fideser/prevent.svg',
        title: 'Prevent',
        description: 'the entering of illegal palm from abroad.',
      },
      {
        iconSrc: 'Fideser/manage.svg',
        title: 'Manage',
        description:
          'palm trading systematically and collect the information for the future market development.',
      },
      {
        iconSrc: 'Fideser/transparent.svg',
        title: 'Transparent',
        description: 'and verify the market of palm trading.',
      },
    ],
  },

  cu: {
    logoSrc: 'Cu.png',
    tags: ['Energy Trading', 'National Platform'],
    title:
      'Blockfint’s Gideon Platform To Power ‘smart-City’ P2p Electricity Trading And Intelligent Building Pilot Initiative',
    description:
      'Memorandum of Understanding signed with project partners Chulalongkorn University, Energy Absolute and Metropolitan Electricity Authority on 17 December 2019.',
    benefits: [
      {
        iconSrc: 'CU-MEA-EA/Contract.svg',
        title: 'Pioneer design of processing',
        description: 'marketing, and effect of P2P electricity trading.',
      },
      {
        iconSrc: 'CU-MEA-EA/Marketing.svg',
        title: 'Smart contracts and trading',
        description: 'Master the smart contracts and trading agent system.',
      },
      {
        iconSrc: 'CU-MEA-EA/P2P.svg',
        title: 'P2P electricity',
        description:
          'Preparation for P2P electricity trading including MDMS, Billing and Wheeling charge.',
      },
    ],
    linkHref: 'https://gideon.energy/en/news/5f193869523e6a00018b836a',
  },
  tbma: {
    tags: ['Financial', 'Digital Bond'],
    logoSrc: 'BMA.png',
    title: 'First Thai Digital Bond Market Platform',
    description:
      'A decentralized system for storing debt securities. The system leverages blockchain technology. Launched first phase of the project covering bond booking, smart bonds, ePassbook with bond holder details and a management system.',
    linkHref:
      'https://www.efinancethai.com/LastestNews/LatestNewsMain.aspx?release=y&ref=M&id=MDU4V0owV3FqeHM9',
    youtube: 'MFx0YepF7QE',
    benefits: [
      {
        title: 'shorten the time',
        description:
          'for newly issued debt securities to trade in the secondary market.',
        iconSrc: 'TBMA/shorten.svg',
      },
      {
        title: 'DLT technology',
        description: 'that support the issuance and approval process.',
        iconSrc: 'TBMA/DLT.svg',
      },
      {
        title: 'helps with efficiency',
        description:
          'in checking debt securities information and reducing redundancy and the time needed for the book closing date.',
        iconSrc: 'TBMA/Efficiency.svg',
      },
    ],
  },
} as ProjectInfos;
