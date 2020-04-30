import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../actions';



export function* fetchToDoList() {  
  let BASE_URL = 'https://jsonplaceholder.typicode.com/todos';
  //let BASE_URL = 'https://redux-app-dd2f9.firebaseio.com/todos.json';
  const response = yield call(fetch, BASE_URL, {
    method: "GET"
  });
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });

}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}