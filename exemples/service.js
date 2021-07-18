const http = require('http');

http.get('https://localhost:8080', (reponse) => {
  let data = '';

  // les données sont envoyées en morceaux
  reponse.on('data', (chunk) => {
    data += chunk;
  });

// une fois tout les chunks ajoutées à data
  reponse.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

exports.reponse=reponse;
exports.err=err;