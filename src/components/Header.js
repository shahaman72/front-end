import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo from "./b_logo.PNG";
import { HStack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <HStack>
          <Text color={"#000"} fontWeight={"700"}>
            SyncML
          </Text>
          <img src={logo} alt="my logo img" height={"50px"} width={"80px"} />
        </HStack>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
