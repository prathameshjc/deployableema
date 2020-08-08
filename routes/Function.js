var Sequelize=require('sequelize')
const Data=require('./Data') 
// require('dotenv').config();

// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

// const devConfig={
//   user:process.env.PG_USER,
//   password:process.env.PG_PASSWORD,
//   host:process.env.PG_HOST,
//   database:process.env.PG_DATABASE,
//   port:process.env.PG_PORT
// }
// const proConfig = process.env.DATABASE_URL; //heroku addons
// const pool = new Pool({
//   connectionString:
//     process.env.NODE_ENV === "production" ? proConfig : devConfig,
// });

const connection = new Sequelize('emadb', 'postgres', 'Groot@2498', {
    host: 'localhost',
    dialect:  'postgres' 
  });
  const User = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    role:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})
  var Demo=connection.define('demo',{
    fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      joiningDate: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      },
      mobile: {
        type: Sequelize.STRING
      }    
})
let uname,pass='';
module.exports ={

    // home page
    home: function home(req,res,next){
        res.send('Home Page ');

    },

// insert data into table
    insertData: function insertData(req,res,next){
        res.send('Data inserted into bulk format ');
        connection.sync().then(function(){
            Emp.bulkCreate(Data)
        })
        .catch(err=>{
            console.error('ERROR :'+err)
        })
    },
//notes fetched
    demotable: function demotable(req,res,next){
      // res.send('employee details ')
      connection.sync().then(function(){
        Demo.findAll().then(demos => res.json(demos));
        })
    },    
    userCreation:function userCreation(req, res, next) {
        console.log('data received...')
        // uname=req.body.username;
        // pass=req.body.password;
        console.log('username : '+req.body.username)
        console.log('password : '+req.body.password)
        
        User.findOne({where: { username:req.body.username , password:req.body.password }}).then(function(users) {
          if (!users) {
           console.log('unknown user');
           res.status(202);
           res.json({"status":"1"})
          } else {
           console.log('user successful login');
           res.status(201);
            res.json({"status":"0"})
            // res.status(201).json({ successful: 'successful' })
            
          }
       }
       ).catch(err => {
        console.log('ERROR :'+err)
    });
    
        // console.log(req.body.username);
        // res.send(data)
        // res.send({
          // const Data=res.data
          
        //  var username: req.body.username,
        //  var password: req.body.password
          
        // });
        // console.log(res.json(Data))
        // console.log(data)
        // console.log({username}, {password})
        // res.json(data)
        
      },
    //user login
    logIn:function logIn(req,res,next){
      
      
      // connection.sync().then(function(){
      //   User.findOne({ where: { username:uname , password:pass } }).then(users => res.json(users));
          
      // })
  //     User.findOne({where: { username:uname , password:pass }}).then(function(users) {
  //       if (!users) {
  //        console.log('unknown user');
  //       } else {
  //        console.log('user password is '+pass);
  //        return res.sendStatus(200)
         
  //       }
  //    }
  //    ).catch(err => {
  //     console.log('ERROR :'+err)
  // });
        

    },

// employee details fetched
    empdetails: function empdetails(req,res,next){
        // res.send('employee details ')
        connection.sync().then(function(){
            Emp.findAll().then(function(emps){
                          console.log(emps)
                          var sample=emps
                          console.log(sample)
                          res.send(emps);
              })
          })
    },
// employee details by ID
    empdetails_id: function empdetails_id(req,res,next){
        res.send('employee details of :  '+req.params.id)
        connection.sync().then(function(){
            Emp.findByPk(req.params.id).then(function(emps){
                          console.log(emps)
                          // console.log(emp.dataValues[0])
                        })
          })
    },
    
 };