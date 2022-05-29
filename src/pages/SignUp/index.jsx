import React, { useState, useEffect } from "react";
import HomeNavigationBar from "../../components/HomeNavigationBar";

//hooks
// useState
// useEffect
// useMemo
// useRef
export default function SignUpPage() {
  const [x, setX] = useState(5);
  const [y, setY] = useState(6);

  useEffect(() => {
    console.log("page loaded");
    // listner
  }, []);

  return (
    <div>
      <HomeNavigationBar />
      <h1>Signup</h1>
      <p>{x}</p>
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
