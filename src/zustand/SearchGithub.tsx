import { create } from 'zustand';
import { SearchGithubStore } from '.';
import { apiUsersGithub } from '../search/api';
import { apiDetailUser, apiPublicRepos } from '../detail/api';
import { UsersGithubResBody } from '../search';
import { DetailUserResBody, ReposResBody } from '../detail';

const initialValue = {
  isLoading: false,
  keyword: '',
  users: [],
  user: {
    id: 0,
    name: '',
    avatar_url: '',
    followers: 0,
    following: 0,
    public_repos: 0,
  },
  repos: [],
};

export const useSearchGithub = create<SearchGithubStore>((set, get) => ({
  ...initialValue,
  setLoading: (data) => set((state) => ({ isLoading: data })),
  setKeyword: (keyword) => set((state) => ({ keyword: keyword })),
  getUsersGithub: async (keyword) => {
    const response: UsersGithubResBody[] = await apiUsersGithub(keyword);
    set((state) => ({ users: response, isLoading: false }));
  },
  getDetailUserGithub: async (username) => {
    const response: DetailUserResBody = await apiDetailUser(username);
    set((state) => ({ user: response }));
  },
  getAllRepos: async (username) => {
    const response: ReposResBody[] = await apiPublicRepos(username);
    set((state) => ({ repos: response }));
  },
}));
