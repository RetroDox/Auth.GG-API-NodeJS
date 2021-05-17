app.post("/hwidreset", (request, response) => {
  console.log(request.body)
  let resetLicense = request.body;
  let yourauth = ""; // Your AUTH.GG Authentication key that you're gonna find in your application settings
  const options = {
    hostname: 'developers.auth.gg',
    port: 443,
    path: '/HWID/?type=reset&authorization=' + yourauth + '&user=' + resetLicense,
    method: 'GET'
  }

  const req = https.request(options, res => { //console.log(`statusCode: ${res.statusCode}`)  <-- Server's response
    res.on('data', d => {
      process.stdout.write(d)
      if (d.includes("succesfully")) { // <-- Will be working on this
        console.log('resetcompleted');
        response.status(201).send("Reset complete!");
      } else {
        response.status(403).send("Reset failed!");
      }
    })
  })
  
  req.on('error', error => {
    console.error(error)
  })
  
  req.end()
})
