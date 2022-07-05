const { getJestProjects } = require('@nrwl/jest')

export default { projects: [...getJestProjects(), '<rootDir>/apps/blockfint.github.io'] }
