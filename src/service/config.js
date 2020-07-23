// const apiUrl = 'http://localhost:4000';
const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://dev-project-backend.vercel.app'
    : 'http://localhost:4000';

// eslint-disable-next-line import/prefer-default-export
export { apiUrl };
