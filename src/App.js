import React from 'react';
import StockData from './StockData'

import { Provider } from "react-redux";
import store from "./Store";



const App = () => {

  return (
    <Provider store={store}>
      <StockData />
    </Provider>
  );
}
export default App;