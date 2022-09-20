import { Menu as MenuSUI } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <MenuSUI>
      <MenuSUI.Item name="search" content="Recherche" as={NavLink} to="/" />
      <MenuSUI.Item name="faq" content="FAQ" as={NavLink} to="/faq" />
    </MenuSUI>
  );
}
