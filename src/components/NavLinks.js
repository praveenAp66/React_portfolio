import React from "react";
import { Link } from "react-scroll";

const NavLinks = ({ link, className, onClick ,offset}) => {
  return (
    <li className={className}>
      <Link to={link} smooth duration={500} offset={offset} onClick={onClick}>
        {link}
      </Link>
    </li>
  );
};

export default NavLinks;
