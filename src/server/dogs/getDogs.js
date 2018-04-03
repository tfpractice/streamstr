import axios from "axios";
import http from "http";

// import { Observable } from "rx";
import * as RX from "rx";

const { Observable, Node } = RX;

const {
  fromCallback,
  fromNodeCallback,
  fromEvent,
  toEventEmitter,
  fromStream,
  fromReadableStream,
  fromWritableStream,
  fromTransformStream,
  writeToStream,
} = Node;

export const DOG_URL = `http://dog.ceo/api/breeds/list/all`;

export const getDogs = () =>
  axios.get(DOG_URL).then(x => console.log(`x`, x.data));

const hDogs = () => http.get(DOG_URL);

const onResponse = req => Observable.fromEvent(req, `response`);

const onData = res => Observable.fromEvent(res, `data`);

const resHand = res => {
  console.log(`res`);
  return res;
};

const dataHand = d => {
  console.log(`d`, d);
};

// const handData

// const final = onResponse(hDogs()).subscribe(resHand);
console.log(`typeof hDogs()`, typeof hDogs());

// const reqOb$ = fromStream(hDogs());

onResponse(hDogs()).subscribe(x => {
  console.log(`x`, x);

  // console.log(`fromStream(x)`, fromStream(x));
  return fromStream(x).subscribe(y => console.log(`y`, y));
});

// const subscription = fromStream(hDogs(), `end`, `response`).subscribe(x => {
//   console.log(x);
// });
//
// console.log(`reqOb$`, reqOb$);

// .map(resHand);

// console.log(`final`, final);

// .subscribe(dataHand) ;
// const v = hDogs();

// console.log(`v`, v);

// export const getDogs
