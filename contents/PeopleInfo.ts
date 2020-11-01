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
    name: 'Suttipong Kanakakorn',
    position: 'CEO',
    desc: `“Nick” is a technology wizard. He dreams about tech even in his sleep!. Before founding Blockfint, he worked with large multinational tech companies in the US leading their product development efforts for over 25years. He is a passionate fitness enthusiast competing himself and stretching his physical limits. His fitness passion has taken him across the world participating in Iron Man and Marathons. He is humble in his conquests. He is also our resident Blockchain guru and can talk technology and business with ease. His brilliance and humility has made the startup strong and successful and clients love us for our grit and determination and passion to deliver the best. He is also our part-time barista serving the best coffee to our coffee loving Blockfinters’.
   `,
    imgSrc: 'num2X.jpg',
    contact: 'Reach out to him at Nick@blockfint.com',
    quote: 'and he will be happy to have a technology infused coffee with you anytime.'
  },
  thomas: {
    name: 'Shimmy Thomas',
    position: 'Business Development',
    desc: `He is the Indian expat who loves Thailand. His early career with Technology pioneers such as Sun Microsystems and Digital Equipment brought him to the land of smiles. And he decided to make this country his home while working with a leading Systems Integrator. He had multiple senior management roles in his 25year experience in the Industry. He is a turnaround specialist and had a successful exit with a mobile software company.     
   `,
    imgSrc: 'Thomas.png',
    contact: 'Reach out to him at Thomas@blockfint.com'
  },
  wichai: {
    name: 'Wichai Patitaporn',
    position: 'Co-Founder',
    desc: `P’Wichai is another tech nerd in the company. He is a seasoned tech evangelist. Invented the first Thai CU word writer in his early days. He has handled critical national projects for the Stock Exchange, Defense Services and large corporate clients. After his long stint with a leading Systems Integrator as Chief of R&D, he relied on his inner instincts to join with our founder and contribute with his deep technology insights. He leads our product efforts in the AgriTech venture while nudging the other product teams developing our financial and commodity market products.

    Clients and Blockfinters’ alike love him for his depth of discussion and he can handle long lectures on technology and on any general topic of interest with ease.`,
    imgSrc: 'wichai2X.png',
    contact: 'Reach out to him at  Wichai@Blockfint.com '
  },

  ponlawat: {
    name: 'Ponlawat Tantivongampai',
    position: 'Project Management Director',
    desc: `Oak has finished both his bachelor and master degree from Chulalongkorn University majoring in electrical engineering and telecommunications engineering, respectively. He has gain over 12 years of experiences in wide IT, Mobile, BSS, OSS and Mobile Application. Oak is goal-oriented person. He loves to achieve those challenges and makes everything possible with the team. Blockfint for him is the combination freshness and experience. They are likely to tackle problems with fun, creativity but serious in a way. However, this mixture of combinations share one goal together, succession.`,
    imgSrc: 'oak2x.png'
  },

  suwanna: {
    name: 'Suwanna Nimitsurachart',
    position: 'Business Analyst',
    desc: `Before P’Su joined Blockfint, she has been experiencing in Implement and Support Banking for over 37 years through all well-known banks in significant positions. With her rounded and wisdom, she will definitely guide Blockfint to solidifying go forward.`,
    imgSrc: 'suwan2x.png'
  },

  rattanapong: {
    name: 'Rattanapong Chairukwattana',
    position: 'CTO',
    desc: `Ake has finished his bachelor degree in Computer engineering  from King Mongkut's University of Technology Thonburi. After that he decided to continue with master degree in same major, he has finished his master from Kasetsart University. Ake always believes that life should be simple and easy. So, after working as a developer for a while he decided to move to his hometown and be a farmer. Now, he decided to shift his career path again to be our solid developer. For Ake, Blockfint is like a family to him. So, he looks after the team members as his family members.`,
    imgSrc: 'pae2X.png'
  }
} as PeopleInfos

////folder contents projects.ts
