import React from 'react'
import {
    Headers,
    HeaderContainer,
    LogoContainer,
    Logo,
    SearchBarContainer,
    SearchBar,
    Button
} from './HeaderElements'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <Headers>
        <HeaderContainer>
          <LogoContainer>
            <Logo>Sling.blog</Logo>
          </LogoContainer>
          <SearchBarContainer>
            <label htmlFor="search"></label>
            <SearchBar
              name="search"
              value=""
              type="text"
              placeholder="   Search"
            ></SearchBar>
            <Button type="submit">
              <BsSearch />
            </Button>
          </SearchBarContainer>
        </HeaderContainer>
      </Headers>
    </>
  )
}

export default Header