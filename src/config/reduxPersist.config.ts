const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: localStorage,
    blacklist: [], // Add the reducers that you don't wanna persist.
    whitelist: ['authStore'], // Add the reducers which you wanna persist, for eg., AuthReducer
  },
};

export default REDUX_PERSIST;