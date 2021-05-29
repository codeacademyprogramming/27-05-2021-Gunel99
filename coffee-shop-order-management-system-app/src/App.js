import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCoffee } from "./modules/coffee/actions";
import OrdersPage from "./modules/orders/components";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCoffee(dispatch);
  }, [dispatch]);


  return (
    <>
      <OrdersPage />
    </>
  );
}

export default App;
