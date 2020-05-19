import React, { useEffect } from "react"
import { Link } from "gatsby"
// styled components
import { HeaderNav, Logo, Menu } from "../styles/HeaderStyles"
import { Container, Flex } from "../styles/GlobalStyles"

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/GlobalContext"
const Header = ({ onCursor }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({
        type: "TOGGLE_THEME",
        theme: "light",
      })
    } else {
      dispatch({
        type: "TOGGLE_THEME",
        theme: "dark",
      })
    }
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav animate={{ y: 0, opacity: 1 }} initial={{ y: -72, opacity: 0 }}>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">FURR</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            ></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
