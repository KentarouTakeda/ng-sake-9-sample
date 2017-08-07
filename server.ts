import http = require('http');

const text = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipiscing', 'elit,', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua.', 'Ut', 'enim', 'ad', 'minim', 'veniam,', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat.', 'Duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur.', 'Excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident,', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum.']
const header = { 'Content-Type': 'application/octet-stream', 'Access-Control-Allow-Origin' : '*', 'Transfer-Encoding': 'chunked' };

http.createServer((req, res)=>{
  res.writeHead(200, header);
  const chunks = text.concat();
  let timer: NodeJS.Timer;

  (function loop(){
    if(chunks.length) {
      res.write(chunks.pop() + ' ');
      timer = setTimeout(loop, 500);
    } else {
      res.end();
    }
  }());

  req.on('close', ()=>{
    timer && clearTimeout(timer);
  });
}).listen(8000);
