import styled, {createGlobalStyle} from "styled-components";
import { Link } from "react-router-dom";
import Logo from '../../Images/logo.svg'
import DownArrowImg from '../../Images/arrow-down.svg'


export const Container = styled.div`
    height: 50px;
    margin: 0px auto;
    margin-bottom: 60px;
    width: 95%;
    position: relative;

`;
export const Wrapper = styled.div`
    padding-top: 10px;
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;

`;
export const Section = styled.div`
  display: flex;
  flex: ${({ flex }) => flex};
  justify-content: center;
  align-items: center;
  align-self: ${({ alignSelf }) => alignSelf};
  gap: ${({ gap }) => gap};
  position: ${({ position }) => position};
  padding-top: ${({ paddingTop }) => paddingTop};
`;


export const Categories = styled(Link)`
    font-weight: 400;
    cursor: pointer;
    padding: 0 25px;
    padding-bottom: 20px;
    color: ${({ active }) => (active ? "#5ECE7B" : "#1d1f22")};
    border-bottom: 2px solid ${({ active }) => (active ? "#5ECE7B" : "transparent")};
    text-decoration: none;
`;

export const PageLogo = styled.div`
    background: url(${Logo}) center / cover no-repeat;
    width: 31px;
    height: 28px;
    cursor: pointer;

`;

export const ContainerCurrency = styled.div`
  display: flex;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
  flex: ${({ flex }) => flex};
  align-self: ${({ alignSelf }) => alignSelf};
  gap: ${({ gap }) => gap};
  position: ${({ position }) => position};
  padding-top: ${({ paddingTop }) => paddingTop};
  position: relative;
  gap: 8px;
`;

export const Symbol = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  cursor: pointer;
`;

export const CurrencyText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const DownArrow = styled.div`
  background: url(${DownArrowImg}) center / cover no-repeat;
  width: 8px;
  height: 4px;
  cursor: pointer;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 160%;
  right: -100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? "all" : "none")};
  transform: ${({ active }) =>
    active ? "translateY(0%)" : "translateY(-10%)"};
  transition: all 0.5s;
  width: 114px;
  background: #ffffff;
  z-index: 15;
  box-shadow: 0px 4px 35px 0px #a8acb030;
  z-index: 10;
`;

export const CurrencyGroup = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 10px 0;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin-top: 10vh;
  background: rgba(57, 55, 72, 0.22);
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: all 0.5s;
  pointer-events: ${({ active }) => (active ? "all" : "none")};
  z-index: 9;
`;

export const LockBody = createGlobalStyle`
body{
    overflow: hidden;
}
`;