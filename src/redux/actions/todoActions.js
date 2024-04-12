import { ActionTypes } from '../actionTypes';

// Aksiyonlar kod içersinde sürekli tekrar ettiği için
// aksiyonları ayrı bir actions dosyasında oluşturucaz

// objenin payload değeri dinamikl olucağı için
// bir obje tanımlamak yerine obje oluşturan fonksiyon tanımladık
// payload'ı parametre oalrak alır ve oluştrudğumuz aksiyona ekler

export const addTodo = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload,
});

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: ActionTypes.REMOVE_TODO,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET_TODOS,
  payload,
});