
//import { useCarToolStoreContext } from "../context/carToolStoreContext";
import { useCarToolRedusStore } from "../hooks/userCarToolReduxStore";

import { CarForm } from './CarForm';

export const CarFormContainer = () => {

  //const store = useCarToolStoreContext();
  const store = useCarToolRedusStore();

  return (
    <>
      <CarForm buttonText="Add Car" onSubmitCar={store.addCar} />
    </>
  );

};