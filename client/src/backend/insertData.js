const {Pool, Client}=require('pg')
const connectionString='postgressql://postgres:Groot@2498@localhost:5432/emadb'

const client=new Client({
    connectionString:connectionString
})
client.connect()
client.query("INSERT INTO users (emailid,password) VALUES ('hr@sankeysolutions.com', 'pass@123')",(err,res)=>{
    console.log(err,res)
    console.log('entry inserted')
    client.end()
})
