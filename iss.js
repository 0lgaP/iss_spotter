const request = require('request');


const fetchMyIP = (callback) => {

  request('https://api.ipify.org?format=json', (error, responce, body) => {
    if (error){
      callback(error, null);
      return;
    }
    if (responce.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }


    const ip = JSON.parse(body).ip
    
    return callback(null, ip);
  })
}



const fetchCoordsByIP = (ip, callback) => {

  request(`https://freegeoip.app/json/${ip}`, (error, responce, body) => {
    if (error){
      callback(error, null);
      return;
    }
    if (responce.statusCode !== 200) {
      const msg = `Status Code ${responce.statusCode} when fetching Coordinants. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    let latitude = JSON.parse(body).latitude;
    let longitude = JSON.parse(body).longitude;

    let locationObj = {
      "latitude": latitude,
      "longitude": longitude,
  }
    return callback(null, locationObj)
  })
};

const fetchISSFlyOverTimes = (coords, callback) => {
  const lat = coords.latitude;
  const lon = coords.longitude;
  request(`https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${lon}`, (error, responce, body) => {
    if(error){
      callback(error, null);
      return;
    }
    if(responce.statusCode !== 200) {
      const msg = `Status Code ${responce.statusCode} when fetching fly over times. Responce: ${body}`;
      callback(Error(msg), null);
      return;
    }

    return callback(null, JSON.parse(body).response)

  })
}



module.exports = {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};
