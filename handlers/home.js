const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats.json');
const breeds = require('../data/breeds.json');

module.exports = (req, res) => {
   const pathname = url.parse(req.url).pathname;
   // Implement the logic for showing the home html view.
   console.log('[home.js 10]home pathname is ', pathname);
   if (pathname === '/' && req.method === 'GET') {
      
      let filePath = path.normalize(
         path.join(__dirname, './views/home/index.html')
      );
      fs.readFile(filePath, (err, data) => {
         if (err) {
            console.log(err);
            res.writeHead(404, {
               "Content-Type": "text/plain"
            });

            res.write(404);
            res.end();
            return;
         }
         res.writeHead(200, {
            "Content-Type": "text/plain"
         });

         res.write(data);
         res.end();
      });
   } else {
      return true;
   }
};