const requestPromiceNative = require('request-promise-native');

const fetchMyIP = () => {
  return requestPromiceNative('https://api.ipify.org?format=json');
  };

const fetchCoordsByIP = (body) => {
  let ip = JSON.parse(body).ip;
  return requestPromiceNative(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = (body) => {
  const {latitude, longitude} = JSON.parse(body);
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return requestPromiceNative(url);

};

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((passTimes) => {
      const { response } = JSON.parse(passTimes);
      return response;
    });
};







  module.exports = {nextISSTimesForMyLocation, printPassTimes};