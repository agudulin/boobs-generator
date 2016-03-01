import fs from 'fs'
import path from 'path'

export default () => (
  fs.readFileSync(path.join(__dirname, 'boobs.txt'), 'utf-8').split('\n')
)
