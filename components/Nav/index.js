import { Menu } from './Menu';
import { DatePicker } from './DatePicker';
import styled from '@emotion/styled';
import { MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { useRouter } from 'next/router';

function Nav() {
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();
  return (
    <StyledNav>
      <img
        onClick={() => router.push('/')}
        src="/assets/airbnb.png"
        alt="logo"
      />
      <StyledSearch onClick={() => setShowSearch(!showSearch)}>
        <p>Search</p>
        <MagnifyingGlass size={36} />
      </StyledSearch>
      {showSearch && <DatePicker />}
      <Menu />
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-width: 70vw;
  min-height: 10vh;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 600px) {
    img {
      width: 70px;
    }
  }
`;

const StyledSearch = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  color: gray;
  align-items: center;
  width: 250px;
  height: 50px;
  border: 1px solid #d3d3d3;
  border-radius: 100vh;
  cursor: pointer;
  transition: 0.5s;
  .picker {
    position: absolute;
    top: 100%;
  }
  svg {
    background-color: #ff585d;
    padding: 8px;
    color: black;
    border-radius: 100vh;
  }
  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 2px rgba(0, 0, 0, 0.05),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.05),
      0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(45, 43, 43, 0.05);
  }
  @media (max-width: 600px) {
    height: 45px;
    width: 190px;
  }
`;

export default Nav;
