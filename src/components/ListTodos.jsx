import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';

const ListTodos = () => {
  // useSelector store'daki reducer'lara abone olamaya yani
  // reducer'larda tutulan verileree erişmeye yarar
  // store çok büyük olabileceğinden sadece genelde ihtiyazmız
  // oaln reducer'lara abone oluruz
  // bunun için => store.reducerİsmi yamamız gerekiyor
  const store = useSelector((store) => store.todoReducer);

  console.log(store.todos);
  return (
    <div>
      {store.todos.map((todo,index) => (
        <TodoCard todo={todo} key={index} />
      ))}
    </div>
  );
};

export default ListTodos;