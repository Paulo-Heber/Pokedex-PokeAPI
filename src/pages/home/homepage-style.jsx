import { themes } from "../../contexts/themes-toggler/themes-context"
import styled from "styled-components"

const HomeStyle = styled.div`
background-color: ${({ theme }) => theme.background};
color:${({ theme }) => theme.color};
justifi-content:spacea-around;
flex-direction: column;
align-items: center;
min-height: 100vh;
min-width:100vh;
display:flex;
width:100vw;
`
const HeaderStyle = styled.header`
justify-content: space-around;
width: 100vw;
padding:20px 0;
display:flex;

&>*:first-child{
  border-radius:15px;
  text-align: center;
}`

const SearchInput = styled.input`
  background-color: ${({ theme }) => (theme === themes.light ? '#d8e3ec' : '#191919')};
  color:${({ theme }) => (theme === themes.light ? '#212121' : '#d8e3ec')};
  border-color: ${({ theme }) => (theme.color)};
  border-style:solid;
  max-height: 35px;
`

export { HomeStyle, HeaderStyle, SearchInput }