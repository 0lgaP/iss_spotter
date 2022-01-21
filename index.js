const request = require('request');
const {nextISSTimesForMyLocation} = require('./iss');


const dateConverter = (fly) => {
 for (const date of fly) {
   const dateTime = new Date(0);
   dateTime.setUTCSeconds(date.risetime);
   const seconds = date.duration;
   console.log(`Next pass is ${dateTime} for ${seconds} seconds`)
 }
}



nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  
  console.log(dateConverter(passTimes), ` So check that out!!`);
});


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// fetchCoordsByIP("184.175.28.68", (error, obj) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Latitude and Longitude:' , obj);
// })


// fetchISSFlyOverTimes({ latitude: '43.6547', longitude: '-79.3623' }, (error, fly) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned the following Flight Times:' , fly);
// });