const {Pool, Client}=require('pg')
const connectionString='postgressql://postgres:Groot@2498@localhost:5432/emadb'

const client=new Client({
    connectionString:connectionString
})
client.connect()
client.query('CREATE TABLE USERS(emailid VARCHAR(20) PRIMARY KEY, password VARCHAR(20) not null)',(err,res)=>{
    console.log(err,res)
    console.log('table created')
    client.end()
})
