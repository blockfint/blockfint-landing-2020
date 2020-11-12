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
    name: 'Suttipong Kanakakorn "Nick"',
    position: 'Chief Executive Officer',
    desc: `Nick worked with multiple early stage startups in Silicon Valley for more than twenty years. The notably successful exit companies include Nutanix (6th employee) and Andiamo (acquired by Cisco). He brings distributed system expertise and Silicon Valley work culture to Blockfint. He has comprehensive skills to architect the solution and reach milestones quickly.\nNick wants to make BlockFint relevant and has a big presence while offering transformation toward the better and fairer financial market. He helped design the first issued bond on digital ledger technology in Thailand. He is one of the main designers of Thailand National Digital ID systems (NDID).\nHe is also our resident Blockchain guru and can talk technology and business with ease. He made clients love us for our grit, determination and passion to deliver the best.\nHe is an endurance sport enthusiast competing himself and stretching his physical limits. It has taken him across the world participating in Ironman and Ultra Trail Running races. He transfers his mental toughness and training approach to his working life as well.`,
    imgSrc: 'num2X.png',
    contact: 'Reach out to him at Nick@blockfint.com',
    quote: 'and he will be happy to have a technology infused coffee with you anytime.'
  },
  thomas: {
    name: 'Shimmy Thomas',
    position: 'Executive Director',
    desc: `He is the Indian expat who loves Thailand. His early career with Technology pioneers such as Sun Microsystems and Digital Equipment brought him to the land of smiles. And he decided to make this country his home while working with a leading Systems Integrator. He had multiple senior management roles in his 25year experience in the Industry. He is a turnaround specialist and had a successful exit with a mobile software company.
   `,
    imgSrc: 'Thomas.png',
    contact: 'Reach out to him at Thomas@blockfint.com'
  },
  wichai: {
    name: 'Wichai Patitaporn',
    position: 'Executive Director',
    desc: `Wichai is another tech nerd in the company. He is a seasoned tech evangelist. Invented the first Thai CU word writer in his early days. He has handled critical national projects for the Stock Exchange, Defense Services and large corporate clients. After his long stint with a leading Systems Integrator as Chief of R&D, he relied on his inner instincts to join with our founder and contribute with his deep technology insights. He leads our product efforts in the AgriTech venture while nudging the other product teams developing our financial and commodity market products.

    Clients and Blockfinters’ alike love him for his depth of discussion and he can handle long lectures on technology and on any general topic of interest with ease.`,
    imgSrc: 'wichai2X.png',
    contact: 'Reach out to him at  Wichai@Blockfint.com '
  },

  ponlawat: {
    name: 'Ponlawat Tantivongampai',
    position: 'Chief Operating Officer',
    desc: `Ponlawat is currently the Chief Operating Officer of Blockfint where he manages projects and products for clients in various industries. Prior to his current position, he was project manager at Amdocs and AIS. He has over 12 years of experience in Mobile services, Operations Support System, Business Support System and Mobile Application.\nPonlawat is a natural leader with a goal-oriented mindset. He tackles challenges with a positive attitude and strives to achieve team success. He is also a strong and passionate trail-runner. His determination and motivation applies to both his working life and personal life.`,
    imgSrc: 'oak2x.png'
  },

  suwanna: {
    name: 'Suwanna Nimitsurachart',
    position: 'Senior Vice President',
    desc: `Suwanna is a veteran of banking system information technology. She had direct implementation expertise in Treasury, Investment, Custodian and Registrar, Fund Selling Agent, Trade Finance, Cross Border Fund Transfer, SWIFT and Oversea Branches, Remittance, and DLT Scripless Bond. She had been working at Sayam Bank, Krungsri Bank, Bangkok Metro Bank, CIMB and became senior VP and manager at Krung Thai Bank. \nSuwanna is persistent and highly committed to deliver the best in each and every piece of her work. She also believes that determination and great team synergy are the key to success. She loves to share her knowledge and experiences. She brought business, technology, strategy and management wisdom to Blockfint.`,
    imgSrc: 'suwan2x.png'
  },

  rattanapong: {
    name: 'Rattanapong Chairukwattana',
    position: 'Chief Technology Officer',
    desc: `Rattanapong graduated from KMUTT with a Master degree in computer engineering. After working as a software engineer for ten years, his yearn for simple life brought him back to his hometown, Chanthaburi province. He became a farmer there. He returned to Bangkok and joined Blockfint as a lead software engineer and now to Chief Technology Officer. \n
    Rattanapong is a strategic thinker with can-do and get the job done attitude. \n
    Rattanapong advises junior software engineers as they pursue a broad range of technical stacks, from guiding on coding to setting standardized working approaches for our innovative products.`,
    imgSrc: 'pae2X.png'
  }
} as PeopleInfos

////folder contents projects.ts
