const express = require('express');
const server = express();
const creds = require('./mysqlcredentials.js');
const mysql = require('mysql');

server.use(express.json());
server.use(express.urlencoded({extended: true}));
db = mysql.createConnection(creds);

server.post('/login', (req, res)=>{
	db.connect(()=>{
		const query = 'SELECT * FROM authusers WHERE email=?';
		db.query(query, [req.body.email], (error, results)=>{
			if(!error && results.length>0){
				res.send({success: true})
			} else {
				res.send({success: false})
			}
		});
	});
});


server.listen(3050, function(){
	console.log('server online');
})