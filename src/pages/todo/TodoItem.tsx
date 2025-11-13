
import { TodoItems, ItemTitle } from "~/styles/pages/Todo";
interface TodoItemProps {
  id: number;
  text: string;
  selected: boolean;
  isSelected: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ id, text, selected, onDelete, isSelected }: TodoItemProps) => {
  return (
    <TodoItems className={selected ? 'is-checked' : ''}>
      <ItemTitle>{text}</ItemTitle>
      <CmCheckbox type='checkbox' checked={selected}
        onChange={() => isSelected(id)}
      />
      <button type="button" onClick={() => onDelete(id)} >
        <Icon name="close__full--6b7" alt="리스트 삭제" width='24' height='24' />
      </button>
    </TodoItems>
  )
}

export default TodoItem
