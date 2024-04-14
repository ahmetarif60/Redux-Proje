import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";
import axios from "axios";
const AddForm = () => {
  // dispatch kurulum
  const dispatch = useDispatch();
  // form gönderilince
  console.log();
  const handleSubmit = (e) => {
    e.preventDefault();

    // todo objesi oluştur
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    axios
      .post("/todos", newTodo)
      // oluşturulan todo'yu store'a ekle
      .then(() => {
        dispatch(addTodo(newTodo));
      });
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-1 my-5">
      <input
        placeholder="Örn:typescript projesi yap"
        className="form-control"
        type="text"
      />
      <button className="btn btn-warning">Ekle</button>
    </form>
  );
};

export default AddForm;
