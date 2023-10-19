import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  // function to increase count value
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  // kohi manxey first time site ma aauda or first time mount huda

  // useEffect(() => {
  //   // backend bata kehi lyaune pathaune modify garne code yesma halxam if first mount ma garney ho vaney
  //   // console.log("Welcome to site");
  // }, []);

  // useEffect(() => {
  //   // ahile count ko kati xa value tyo backend samma puryaidey
  //   // console.log("Count value changed");
  // }, [count]);

  // useEffect(() => {
  //   // it executes in every trigger
  //   console.log("bye world");
  // });

  return (
    <>
      <div>{count}</div>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </>
  );
};

export default UseEffect;
