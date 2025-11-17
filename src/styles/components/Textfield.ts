import styled from 'styled-components'
import { typo } from '~/styles/helpers/mixins'
/*/* ========================== Variables ========================== */

/* ========================== Mixins ========================== */

/* ========================== Styles ========================== */
export const TextfieldWrapper = styled.div`
  /* ${typo({ size: 14, weight: 500, color: "gray-900" })}; */
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const TextfieldLabel = styled.label<{ required?: boolean }>`
  ${typo({ size: 14, weight: 500, color: "gray-900" })};
  display: inline-block;
  margin-bottom: 4px;
  ${({ required }) => required && `
    &::after {
      content: ' *'; 
      color: var(--color-red-900);
    }
  `}
`;

export const TextfieldMessage = styled.p<{ internalStatus?: 'success' | 'error' | '' }>`
  ${typo({ size: 12, weight: 400, color: "gray-900" })};
  display: inline-block;
  color: ${({ internalStatus }) => internalStatus === 'error' ? 'var(--color-red-900)' : internalStatus === 'success' ? 'var(--color-green-900)' : 'var(--color-gray-900)'};
`;

export const TextfieldSuffixButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  & + button {
    margin-left: 4px;
  }
  &:last-child {
    margin-right: 8px;
  }
`;

export const CustomInput = styled.div<{
  size?: 'sm' | 'md' | 'lg',
  disabled?: boolean,
  readonly?: boolean,
  status?: 'success' | 'error' | '',
}>`
  display: flex;
  align-items: center;
  height: var(--form-height-${({ size }) => size || 'md'});
  background: ${({ disabled }) => disabled ? 'var(--color-gray-300)' : 'var(--color-gray-100)'};
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-md);
  transition: var(--transition);
  
  ${({ disabled }) => !disabled && `
    &:focus-within {
      border-color: var(--color-primary-800);
      box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.1);
    }
  `}
  
  ${({ status }) => status === 'error' && `
    border-color: var(--color-red-900);
    &:focus-within {
      border-color: var(--color-red-900);
      box-shadow: 0 0 0 2px rgba(194, 23, 43, 0.1);
    }
  `}
  
  input {
    ${typo({ size: 14, weight: 400, color: "gray-900" })};
    flex: 1 1 0%;
    height: 100%;
    padding: 0 8px;
    background: transparent;
    border: none;
    outline: none;
    caret-color:var(--color-primary-800);
    transition: var(--transition);

    &::placeholder {
      color: var(--color-gray-500);
    }
  }
`;