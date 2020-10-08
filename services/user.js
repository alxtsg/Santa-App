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

/**
 * Gets a user record by username.
 *
 * @param {string} username Username of the user.
 *
 * @returns {UserRecord|null} The matching user record, or null if no matchin
 *                            record can be found.
 */
const getUserRecordByUsername = async (username) => {
  const records = await getUserRecords();
  console.log(records);
  const user = records.find((user) => (user.username === username));
  if (!user) {
    return null;
  }
  return user;
};

module.exports = {
  getUserRecordByUsername,
};
