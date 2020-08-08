const {Pool, Client}=require('pg')
const connectionString='postgressql://postgres:Groot@2498@localhost:5432/emadb'

const client=new Client({
    connectionString:connectionString
})
client.connect()
client.query('CREATE TABLE empDetails(id INT PRIMARY KEY, fullname VARCHAR(50) not null,email VARCHAR(20) not null,age INT not null,joiningdate DATE not null,salary INT,mobile VARCHAR(10) unique,created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW())',(err,res)=>{
    console.log(err,res)
    console.log(' employee details table created')
    client.end()
})
