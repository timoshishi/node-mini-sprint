const http = require('http');

//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
};

const port = 3000;

// TODO: Fill with strings of your favorite quotes :)
const quotes = [
  'one',
  'two',
  'three',
  'four',
  'five'
];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const handleRequest = function(req, res) {
  console.log(`Endpoint: ${req.url} Method: ${req.method}`);

  // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
  if (req.url == '/') {
    console.log('redirecting');
    res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) //redirect to quote
    res.end();
  }

  // TODO: GET ONE
  if ((req.url == '/quote' || req.url == '/quote') && req.method == "GET") {
res.writeHead(200, {...headers})
    //YOUR CODE HERE
const quote = quotes[getRandomInt(0 ,quotes.length)]
res.write(quote);
res.end();

  }
   else if ((req.url == '/all' || req.url == '/quote') && req.method == "GET") {
res.writeHead(200, {...headers})
    //YOUR CODE HERE

res.write(JSON.stringify(quotes));
res.end();

  }
  // TODO: POST/CREATE
  else if ((req.url == '/add' || req.url == 'FILL ME IN') && req.method == "POST") {

    res.writeHead(200, { ...headers })

    let body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      quotes.push(body)
      console.log({quotes})
      res.write('post received');
      res.end()
    });

  }
//   else if ((req.url == `/delete/:${id}` || req.url == 'FILL ME IN') && req.method == "POST") {
//     res.writeHead(200, { ...headers })


//     const arr = req.url.split('/')
//     const id = Number(arr[arr.length - 1])
//     quotes.splice(id, 1)

//     res.write(JSON.stringify(quotes));
// res.end();
//   }

//CATCH ALL ROUTE
  else {
    res.writeHead(404,headers);
    res.end('Page not found');

  }
}

const server = http.createServer(handleRequest);
server.listen(port);

console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);
