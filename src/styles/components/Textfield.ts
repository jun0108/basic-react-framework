import styled from 'styled-components'

/*/* ========================== Variables ========================== */

/* ========================== Mixins ========================== */

/* ========================== Styles ========================== */
export const CmInput = styled.input`
  ${typo({size:"var(--font-size-14)", weight: 500, color:"var(--color-gray-900)"})};
  height: var(--form-height-md);
  padding: 0 8px;
  background: var(--color-gray-100);
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-md);
  caret-color:var(--color-primary-800);
  transition: var(--transition);
  &::placeholder {
    color: var(--color-gray-500);
  }
  &:hover, &:focus {
    border-color:var(--color-primary-800);
  }
  &:disabled {
    background-color: var(--color-gray-400);
    border-color: var(--color-gray-500);
  }
`;
