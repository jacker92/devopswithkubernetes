import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'

setInterval(() => {
    fs.readFile('/usr/src/app/files/id.txt', 'utf8', (error, data) => {
        console.log(`${new Date().toISOString()}: ${data}`)
    })  
}, 5000)