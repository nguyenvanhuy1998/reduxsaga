import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, delay, put, takeLatest } from 'redux-saga/effects';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 1s');
  // Wait 1s
  yield delay(1000);

  console.log('Wating done, dispatch action');
  // Dispatch action success
  yield put(incrementSagaSuccess(action.payload));
}
export default function* counterSaga() {
  console.log('counterSaga');

  yield takeEvery(incrementSaga.toString(), handleIncrementSaga); // action bao nhiêu lần thì chạy bấy nhiêu lần
  // yield takeLatest(incrementSaga.toString(), handleIncrementSaga); // action bao nhiêu lần thì nó sẽ cancel những lần trước đó và chạy ông cuối
}
