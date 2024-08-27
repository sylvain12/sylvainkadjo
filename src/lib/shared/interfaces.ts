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
  id: number;
  name: string;
}
