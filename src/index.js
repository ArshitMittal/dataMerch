const config = require("./config/config");

const values = config.get();

const url = process.env.DATA_MERCH_URL;
const data = {
  auth: {
    authentication_token: values.AUTHENTICATION_TOKEN,
    authentication_key: values.AUTHENTICATION_KEY,
  },
};
const init = () => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      config.set(config, { res });
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};
