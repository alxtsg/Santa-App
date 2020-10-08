const fetch = require('node-fetch');

/**
 * @typedef {import('../type-def').User} User
 * @typedef {import('../type-def').UserRecord} UserRecord
 * @typedef {import('../type-def').UserProfile} UserProfile
 */

/**
 * Get users.
 *
 * @returns {User[]} An array of user.
 */
const getUsers = async () => {
  const url = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json';
  const response = await fetch(url);
	return await response.json();
};

/**
 * Get user profiles.
 *
 * @returns {UserProfile[]} An array of user profiles.
 */
const getUserProfiles = async () => {
  const url = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json';
  const response = await fetch(url);
	return await response.json();
};

/**
 * Get user records.
 *
 * @returns {UserRecord[]} An array of user records.
 */
const getUserRecords = async () => {
  try {
    const users = await getUsers();
    const userProfiles = await getUserProfiles();
    return userProfiles.map((profile) => {
      const user = users.find(user => (user.uid === profile.userUid));
      return {
        ...profile,
        username: user.username
      };
    });
  } catch (error) {
    console.error(error);
    throw new Error('Unable to load user profiles.');
  }
};

module.exports = {
  getUserRecords
};
