import React from "react";
import NavLogoComponent from "./nav-logo";
import NavMenuComponent from "./nav-menu";
import NavRightComponent from "./nav-right";

export default function NavbarComponent() {
  return (
    <div className="navbar">
      <NavLogoComponent />
      <NavMenuComponent />
      <NavRightComponent />
    </div>
  );
}
