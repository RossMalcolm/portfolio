import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">Ross Malcolm</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="/">
                              About Me
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="/">
                              Work Experience
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="/">
                              Extracurriculars
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="/">
                              Coding Projects
                          </NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink>
                          Contact Me
                      </NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default Navbar
