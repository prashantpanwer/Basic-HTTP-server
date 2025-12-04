// Import required modules
const http = require('http');
const fs = require('fs');
// Create the server
const server = http.createServer((req, res) => {
// Write a file (creates or overwrites 'example.txt')
fs.writeFile('example.txt'
,
'Hello, this is written to the file!'
, (err) => {
if (err) {
res.writeHead(500, { 'Content-Type': 'text/plain' });
res.end('Error writing file');
return;
}
// Read the file we just wrote
fs.readFile('example.txt'
,
'utf8'
, (err, data) => {
if (err) {
res.writeHead(500, { 'Content-Type': 'text/plain' });
res.end('Error reading file');
return;
}
// Send the file content as the response
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end(`File content: ${data}`);
});
});
});
// Listen on port 3000
server.listen(3000, () => {
console.log('Server running at http://localhost:3000/');
})