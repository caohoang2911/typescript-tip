// export const getDeepValue = (obj: any, firstKey: string, secondKey: string) => {
//   return obj[firstKey][secondKey];
// };

// const obj = {
//   foo: {
//     a: true,
//     b: false,
//   },
//   bar: {
//     c: "12",
//     d: 2,
//   },
// };

// const value = getDeepValue(obj, "foo", "b");

// SOLUTION

export const getDeepValue = <
  TObj,
  TFirstKey extends keyof TObj,
  TSecondKey extends keyof TObj[TFirstKey]
>(
  obj: TObj,
  firstKey: TFirstKey,
  secondKey: TSecondKey
) => {
  return obj[firstKey][secondKey];
};

const obj = {
  foo: {
    a: true,
    b: false,
  },
  bar: {
    c: "12",
    d: 2,
  },
};

const value = getDeepValue(obj, "foo", "b");

// More time

const returnValue = <TVal>(val: TVal) => {
  return val;
};

const val = returnValue({ a: 3, b: 4 });
