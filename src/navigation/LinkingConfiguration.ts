import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Main: {
            screens: {
              Dashboard: 'Dashboard',
              POInfo: 'POInfo',
            },
          },
          UserProfile: {
            screens: {
              UserProfile: 'UserProfile',
            },
          },           
        },
      },
      NotFound: '*',
    },
  },
};
