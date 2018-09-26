const _ = require("lodash");

const locations = require("../../data/locations");

const vectorDistance = (dx, dy) => {
  return Math.sqrt(dx * dx + dy * dy);
};

const locationDistance = (location1, location2) => {
  const dx = location1.latitude - location2.latitude;
  const dy = location1.longitude - location2.longitude;

  return vectorDistance(dx, dy);
};

/**
 * Returns the closest location for a given geo position
 * @param {string} targetLocation Lat Long of the target location
 * @returns {object}
 */
module.exports = async targetLocation => {
  const targetLatLng = JSON.parse(targetLocation);

  if(!targetLatLng.latitude || !targetLatLng.longitude) {
    return {
      body: 'Coordinates not formatted correctly',
      headers: {'Content-Type': 'text/plain'},
      statusCode: 422
    };
  }

  closestLocation = locations.reduce((prev, curr) => {
    const prevDistance = locationDistance(targetLatLng, prev);
    const currDistance = locationDistance(targetLatLng, curr);

    return prevDistance < currDistance ? prev : curr;
  });

  return closestLocation;
};
