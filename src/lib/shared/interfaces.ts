// Navigation
export interface INavigationLinkItem {
  name: string;
  url: string;
  icon?: string;
  openInNewTab?: boolean;
  isActive?: boolean;
}

// Interface for a Tag
export interface ITag {
  id: string;
  name: string;
}

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
}
