const {Pool, Client}=require('pg')
const connectionString='postgressql://postgres:Groot@2498@localhost:5432/emadb'

const client=new Client({
    connectionString:connectionString
})
client.connect()
console.log('connected')
