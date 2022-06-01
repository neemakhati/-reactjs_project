module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f0eeb61a1c9eb6950de9de2300ad6fdc'),
  },
});
