export interface UsersGithubResBody {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

export interface SearchRes {
  usesr: UsersGithubResBody[];
  search: string;
}

export interface UserItemProps {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}
