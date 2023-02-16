export interface DetailUserResBody {
  id: number;
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface ReposResBody {
  id: number;
  name: string;
  description: string;
  size: number;
  watchers: number;
  html_url: string;
}
