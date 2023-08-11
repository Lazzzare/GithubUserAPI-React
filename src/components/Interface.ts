export default interface UserDataInterface {
  githubError: null | string;
  setGithubError: () => void;
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter_username: string;
  company: string;
  created_at: string;
  html_url: string;
}
