const ACCESS_TOKEN = 'access_token';

export const addAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
