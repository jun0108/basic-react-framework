import styled from 'styled-components'
import {typo} from "~/styles/helpers/mixins/index";

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 30px;
  background: var(--layout-header-height);
  background-color: var(--color-primary-800);
  color: var(--color-white);
`;

export const HeaderLogo = styled.h1`
  ${typo({ size: "var(--font-size-24)", weight: 600, color: "var(--color-white)" })};
  margin-right: 40px;
  cursor: pointer;
`;

export const HeaderList = styled.ul`
  ${typo({ size: "var(--font-size-20)", weight:500, color: "var(--color-white)" })};
  display: flex;
  align-items: center;
  flex: 1 1 0%;
`;

export const HeaderItem = styled.li`
  display: flex;
  align-items: center;
  height: var(--form-height-md);
  padding: 0 20px;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    background-color: var(--color-primary-900);
  }
`;