import { Menu as MenuSUI } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const handleClick = (e) => {
    const navBarLinks = document.querySelectorAll("a.item");
    for (let i = 0; i < navBarLinks.length; i++) {
      navBarLinks[i].innerText === e.target.text
        ? navBarLinks[i].classList.add("active")
        : navBarLinks[i].classList.remove("active");
    }
  };
  return (
    <MenuSUI>
      <MenuSUI.Item
        name="search"
        content="Recherche"
        active
        as={NavLink}
        to="/"
        onClick={handleClick}
      />
      <MenuSUI.Item
        name="faq"
        content="FAQ"
        as={NavLink}
        to="/faq"
        onClick={handleClick}
      />
    </MenuSUI>
  );
}
