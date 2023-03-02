const express = require('express');
const request = require('request');
const app = express();
let ans=[];

app.get('/http://localhost:8090/primes',function(req,res){
    const url = req.body;
    
    const data = Json.parse(url);
    ans.push(data);
    
});

app.get('/http://localhost:8090/fibo',function(req,res){
    const url = req.body;
  
    const data = Json.parse(url);
    ans.push(data);
   
});

app.get('/http://localhost:8090/odd',function(req,res){
    const url = req.body;
   
    const data = Json.parse(url);
    ans.push(data);
    
});

app.get('/http://localhost:8090/rand',function(req,res){
    const url = req.body;
    
    const data = Json.parse(url);
    ans.push(data);
    
});

ans.sort();

app.post('/',function(req,res){
    return ans;
})

