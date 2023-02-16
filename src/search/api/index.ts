import { api } from '../../constant/api';

export const apiUsersGithub = (keyword: string) =>
  api
    .get(`search/users?q=${keyword}`)
    .then(({ data }) => data.items)
    .catch((err) => {
      console.log(err);
    });
