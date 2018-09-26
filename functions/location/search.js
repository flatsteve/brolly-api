const locations = require("../../data/locations");

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

  return results;
};
