import dotenv from 'dotenv'
dotenv.config()
process.env['SOMETHING'] = 'SOMETHING OTHER'
console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_URL)
console.log(process.env.SOMETHING)
console.log(process.env)
