import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { increment } from './counterSlice';

export function* log(action: PayloadAction) {
  console.log('Log', action);
}
export default function* counterSaga() {
  console.log('counterSaga');

  yield takeEvery('*', log); // lắng nghe tất cả  action theo mong muốn
  //   yield takeEvery(increment().type, log); // lắng nghe action mong muốn
}
