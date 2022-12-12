export interface Member {
  login: string;
  id: number;
  avatar_url: string;
}

export interface UserApi {
  avatar_url: string;
  created_at: string;
  email: string;
  followers: number;
  following: number;
  id: number;
  login: string;
  name: string;
  public_repos: number;
}

export interface UserVM {
  AvatarUrl: string;
  CreatedAt: string;
  Email: string;
  Followers: number;
  Following: number;
  Id: number;
  Login: string;
  Name: string;
  PublicRepos: number;
}