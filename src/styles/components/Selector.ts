import styled from 'styled-components'
import {icon} from "~/styles/helpers/mixins/index";
/*/* ========================== Variables ========================== */
/* ========================== Mixins ========================== */
/* ========================== Styles ========================== */
export const CmCheckbox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-gray-500);
  background-color: var(--color-white);
  cursor: pointer;

  &:checked {
    background-color: var(--color-primary-800);
    border-color: var(--color-primary-800);
    &::after {
    ${icon({name:'check__line--fff'})};
      content: '';
      width: 12px;
      height: 12px;
      margin-top: 1px;
    }
  }
`;
export const CmRadio = styled.input`
  box-sizing: border-box;
  background-clip: content-box;
  width: 20px;
  height: 20px;
  padding: 2px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-full);
  cursor: pointer;

  &:checked {
    border: 2px solid var(--color-primary-800);
    background-color: var(--color-primary-800);
  }
`;
