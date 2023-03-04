import * as fs from 'fs'

import prompt from 'prompt-sync'
const input = prompt()

export function loadFile(file){
  try{
      const data = fs.readFileSync(file, 'utf-8')
      return data
  } catch (error){
      console.error(error)
  }
}