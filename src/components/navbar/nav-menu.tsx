import { navMenuItems } from "@/lib/shared/constant";
import { INavigationLinkItem } from "@/lib/shared/interfaces";
import NavMenuItemComponent from "./nav-menu-item";

export default function NavMenuComponent() {
  return (
    <div className="navbar__menu">
      {navMenuItems &&
        navMenuItems.map(({ name, url }: INavigationLinkItem) => (
          <NavMenuItemComponent key={name} name={name} url={url} />
        ))}
    </div>
  );
}
