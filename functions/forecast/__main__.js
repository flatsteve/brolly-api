const fetch = require("node-fetch");
const config = require("../../config");

/**
 * Returns the closest location for a given geo position
 * @param {string} locationID // ID of the location
 * @returns {object}
 */
module.exports = async locationID => {
  locationID = Number(locationID);

  const res = await fetch(
    `${config.BASE_URL}${locationID}?res=3hourly&key=${config.API_KEY}`
  );
  const forecast = await res.json();

  return forecast;
};
