const tokenHeaderKey = process.env.REACT_APP_HEADER_KEY;

module.exports = {

  setUserToken: (token) => {
    localStorage.setItem(tokenHeaderKey, JSON.stringify(token));
  },

  getUserToken: () => {
    const token = localStorage.getItem(tokenHeaderKey);
    return JSON.parse(token);
  },

  removeUserToken: () => {
    localStorage.removeItem(tokenHeaderKey);
    return true;
  },
};
