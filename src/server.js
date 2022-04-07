import App from './App.js';

const APP_PORT = process.env.PORT || process.env.APP_PORT;
const { APP_BASE_URL } = process.env;

App.listen(APP_PORT, () => {
  console.log(`⚡ server is running on ${APP_BASE_URL}:${APP_PORT}`);
});
