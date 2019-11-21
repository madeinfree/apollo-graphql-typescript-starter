import fs from 'fs'
import path from 'path'
import { argv } from './util'

type Argv = {
  name?: string
}

const getTypeDefsTemplate = (): string => {
  return `import { gql } from 'apollo-server'

const typeDefs = gql\`
\`

export default typeDefs`
}

const createTypeDefsFile = ({ name }: Argv): void => {
  const fileName = path.resolve('src', 'typeDefs') + `/${name || 'TypeDefsDefault'}` + '.ts'
  if (fs.existsSync(fileName)) throw Error(`File ${fileName} Exists.`)
  fs.writeFileSync(fileName, getTypeDefsTemplate())
}

createTypeDefsFile(argv)