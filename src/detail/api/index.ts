import { api } from '../../constant/api';

export const apiDetailUser = (username: string | undefined) =>
  api
    .get(`users/${username}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

export const apiPublicRepos = (username: string | undefined) =>
  api
    .get(`users/${username}/repos`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
