var url = require('url');
var adr = 'http://localhost:8888/index.html?year=2019&month=September';
var q = url.parse(adr, true);

console.log(q.host); 
console.log(q.pathname); 
console.log(q.search); 

var qdata = q.query; 
console.log(qdata.month);
console.log(qdata.year);