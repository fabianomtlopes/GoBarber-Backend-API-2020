export default {
  jwt: {
    // secret: process.env.APP_SECRET || undefined,
    secret: process.env.APP_SECRET || '',
    expiresIn: '1d',
  },
};
