import styled from 'styled-components'
import { space } from "~/styles/helpers/mixins/index";

export const TodoList = styled.div`
  width: 500px;
`;

export const TodoHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  
  input {
    flex: 1 1 0%;
    margin-right: 8px;
  }
  button {
    & + button {
      margin-left: 8px;
    } 
  }
`;

export const ItemTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 0%;
`

export const TodoItems = styled.li`
  ${space({ x: '8px' })};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--form-height-md);
  padding: 0 10px;
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-md);
  & + li {
    margin-top: 8px;
  }
  &.is-checked {
    ${ItemTitle} {
      text-decoration: line-through;
    }
  }
`