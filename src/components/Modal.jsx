import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions/todoActions";
import axios from "axios";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // inputtaki ismi alma
    const newText = e.target[1].value;

    // eski todonun bütün verilerini alıp
    // inputtan aldığımız veri ile güncelleme

    const updated = { ...todo, text: newText };

    axios
      .put(`/todos/${todo.id}`, updated)
      // store'daki todoyu güncelle
      .then(() => dispatch(updateTodo(updated)));

    // modalo kapat
    close();
  };
  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todoyu Düzenle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={close}></button>
          </div>
          <div className="modal-body">
            <label>Yeni Başlık</label>
            <input
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              Vazgec
            </button>
            <button type="submit"  className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
