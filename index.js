const request = require('request');
const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});


fetchCoordsByIP("184.175.28.68", (error, obj) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Latitude and Longitude:' , obj);
})


fetchISSFlyOverTimes({ latitude: '43.6547', longitude: '-79.3623' }, (error, fly) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned the following Flight Times:' , fly);
});