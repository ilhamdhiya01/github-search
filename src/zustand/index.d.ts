import { UsersGithubResBody, SearchRes } from '../search';
import { DetailUserResBody, ReposResBody } from '../detail';

export interface SearchGithubState {
  isLoading: boolean;
  keyword: string;
  users: UsersGithubResBody[];
  user: DetailUserResBody;
  repos: ReposResBody[];
}

export interface SearchGithubAction {
  setLoading: (data: boolean) => void;
  setKeyword: (keyword: string) => void;
  getUsersGithub: (keyword: string) => void;
  getDetailUserGithub: (username: string | undefined) => void;
  getAllRepos: (username: string | undefined) => void;
}

export interface SearchGithubStore extends SearchGithubState, SearchGithubAction {}
