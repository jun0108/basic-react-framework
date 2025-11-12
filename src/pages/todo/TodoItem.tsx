
import styled from "styled-components"
// import Icon from "~/components/Icon";
// import { CmCheckbox } from "~/styles/components/Selector";
// import { space } from "~/styles/helpers/mixins";

interface TodoItemProps {
  id: number;
  text: string;
  selected: boolean;
  isSelected: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItems = styled.li`
  ${space({x:'8px'})};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--form-height-md);
  padding: 0 10px;
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-md);
`

const ItemTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 0%;
`

const TodoItem = ({ id, text, selected, onDelete, isSelected }: TodoItemProps) => {
	return (
		<TodoItems>
			<ItemTitle>{text}</ItemTitle>
			<CmCheckbox type='checkbox' checked={selected}
				onChange={() => isSelected(id)}
			/>
			<button type="button" onClick={() => onDelete(id)} >
				<Icon name="close__full--6b7" alt="리스트 삭제" width='24' height='24'/>
			</button>
		</TodoItems>
	)
}

export default TodoItem
