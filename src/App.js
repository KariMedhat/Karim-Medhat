import React, {Component} from 'react';
import { Provider } from "react-redux";
import store from './redux/store'
import PageRoutes from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
import Layouts from "./Layouts/Layouts";

class App extends Component {
  render() {
    return (
        <>
        <Provider store={store}>
          <BrowserRouter>
              <Layouts>
               <PageRoutes />
              </Layouts>
            </BrowserRouter>
          </Provider>
        </>
    );
  }
}

export default App;
