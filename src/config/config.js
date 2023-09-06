let config = {
  AUTHENTICATION_TOKEN: "test_c88b409fa488f8911b76d857ec97003a",
  AUTHENTICATION_KEY: "test_e007e4d384f3a074290d",
  DATAMERCH_TOKEN: null,
};

module.exports = {
  set: (input) => {
    config = Object.assign(config, input);
  },
  get: () => {
    return config;
  },
};
