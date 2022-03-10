import Styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="/">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="/about">1. About Us</a>
        </li>
        <li>
          <a href="/services">1. Our Work</a>
        </li>
        <li>
          <a href="/contact">1. Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = Styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
      color: white;
      text-decoration: none;
  }
  ul {
      display: flex;
      list-style: none;

  }
  #logo {
      font-size: 1.5rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
  }
  li {
      padding-left: 10rem;
  }
`;

export default Nav;
