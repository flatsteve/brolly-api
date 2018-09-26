const locations = require("../../data/locations");

const MAX_RESULTS = 10;

/**
 * Returns the locations that start with the searchTerm
 * @param {string} searchTerm Start of location name to search for
 * @returns {array}
 */
module.exports = async searchTerm => {
  searchTerm = searchTerm.toLowerCase();

  const results = locations.filter(location => {
    const locationName = location.name.toLowerCase();
  
    return 0 === locationName.indexOf(searchTerm);
  });

  return results.slice(0, MAX_RESULTS);
};
