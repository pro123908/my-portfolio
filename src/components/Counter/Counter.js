import React, { useState, useEffect } from "react";

const Counter = ({ time }) => {
  const [counter, setCounter] = useState(time);
  const [text, setText] = useState("Reversing in");

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => {
        console.log(counter);
        if (counter === 0) {
          setText("");
          clearInterval(interval);
        } else return counter - 1;
      });

      //   setCounter((counter) => {
      //     if (counter === 0) {
      //       clearInterval(interval);
      //     } else return counter - 1;
      //   });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="counter">
      {text} {counter}
    </div>
  );
};

export default Counter;
