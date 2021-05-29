import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCoffee } from "./modules/coffee/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCoffee(dispatch);
  }, [dispatch]);


  return (
    <>

    </>
  );
}

export default App;
