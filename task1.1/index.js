import { v4 as uuidv4 } from 'uuid';

const value = uuidv4();

setInterval(() => {
    console.log(`${new Date().toISOString()}: ${value}`) 
}, 5000)    
