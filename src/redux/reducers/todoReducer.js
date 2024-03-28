/*
! reducer
* storun nasıl değişeceğine karar verir
* reduer normal bir fonksiyondur
* ve iki parametre alır
* > state: store'da tutulan verilerin son durumu,
* > action: verilerin nasıl değişeceğini belirten obje.

? Önemli: reducer fonksiyonunda return edilen veri store'un son hali olur

*/

// state tutacağımız verilerin ilk değeri
const initialState = {
  todos: [],
  category: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const tempTodos = state.todos.concat(action.payload);

      return { ...state, todos: tempTodos };

    case "REMOVE_TODO":
      // payload'ile id si gelen todoyu diziden çıkarma
      const filtred = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      return { ...state, todos: filtred };

      case "UPDATE_TODO":
        
      return {...state, todos: copyTodos };
      
    // Eğerki gelen akiyon yukardakilerden hicbiri değilse state'i değiştirme
    default:
      return state;
  }
};
// reducer'ı store'a tanıtmak için export et
export default todoReducer;

        // //1) splice yöntemi
        // // a) statedeki todoların kopyasını oluşturun
        //const copyTodos = [...state.todos];

        // // b) güncellenicek elemanın dizide sırasını bul
        //const index = copyTodos.findIndex((todo) => todo.id === action.payload.id);

        // //c) spilce ile diziyi güncelle
        //copyTodos.splice(index, 1, action.payload);
        