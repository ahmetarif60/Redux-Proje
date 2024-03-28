/* 
! store oluşturma
* 1. Redux kütüphanesinden "cerateStore" methodu iport edilir
* 2. store içinde tutulan veriler kategoriz edilir ve reducer'lar oluşturulur
* 3. oluşturulan reducerlar combinereducers methodu ile birleştirilir
* 4. store oluşturulan yeni reducer tanıtılır
* 5. oluşturulan store projeye tanıtılır
*/
import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

// birden fazla reducer varsa birleştirilir
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// store'u oluştur ve reducer'ları tanıt
const store = createStore(rootReducer);

export default store;
