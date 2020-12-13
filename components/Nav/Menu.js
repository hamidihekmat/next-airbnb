import styled from '@emotion/styled';
import { useEffect } from 'react';
import { List, UserCircle } from 'phosphor-react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Menu = () => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [tokenExists, setTokenExists] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setTokenExists(true);
    }
  }, []);
  function handleSignout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return router.reload();
  }
  // If token exists (user is logged in then show a different menu option)
  return (
    <StyledMenu onClick={() => setToggleMenu(!toggleMenu)}>
      <List size={24} />
      <UserCircle size={32} />
      {toggleMenu && (
        <StyledMenuItems>
          {tokenExists ? (
            <>
              <Link href="/addlisting">
                <p>Add listing</p>
              </Link>
              <p onClick={handleSignout}>Sign out</p>
            </>
          ) : (
            <>
              <Link href="/signup">
                <p>Sign up</p>
              </Link>
              <Link href="login">
                <p>Login</p>
              </Link>
            </>
          )}

          <hr />
          <p>Help</p>
        </StyledMenuItems>
      )}
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 20px;
  cursor: pointer;
  svg {
    color: gray;
  }
  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 2px rgba(0, 0, 0, 0.05),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.05),
      0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(45, 43, 43, 0.05);
  }
`;

const StyledMenuItems = styled.div`
  position: absolute;
  z-index: 99;
  overflow: hidden;
  background: white;
  width: 150%;
  right: 0;
  border-radius: 10px;
  top: 100%;
  border: 1px solid lightgray;
  margin-top: 5px;
  p {
    padding: 8px;
  }
  p:hover {
    background: lightgray;
  }
  hr {
    border-top: 1px solid lightgray;
  }
`;
