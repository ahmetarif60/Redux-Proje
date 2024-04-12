import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { useState } from "react";
import { removeTodo, updateTodo } from "../redux/actions/todoActions";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  // store'a dan todo'yu kaldır
  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  // store'daki todo'nun is_done değerini tersine çevir
  const handleStatus = () => {
    // todo'nun is_done değerini terine çevir
    const updated = { ...todo, is_done: !todo.is_done };

    // store'daki eski todo'yu güncel todo'ile değiştir
    dispatch(updateTodo(updated));
  };

  return (
    <div className="border shadow shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>

      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>

      <p>{todo.created_at}</p>

      <button onClick={() => setIsOpen(false)} className="btn btn-primary">
        Düzenle
      </button>

      <button onClick={handleStatus} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamla"}
      </button>

      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
