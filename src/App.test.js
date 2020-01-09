import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// index.js에서 썼던 promise 예제.
// function increase(number) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = number + 10;
//       if (result > 50) {
//         const e = new Error("NumberTooooooooooooooBig");
//         return reject(e);
//       }
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// }

// async function runTasks() {
//   try {
//     let result = await increase(0);
//     console.log(result);
//     result = await increase(result);
//     console.log(result);
//     result = await increase(result);
//     console.log(result);
//     result = await increase(result);
//     console.log(result);
//     result = await increase(result);
//     console.log(result);
//     result = await increase(result);
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// }

// increase(0)
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .catch(e => {
//     console.log(e);
//   });
