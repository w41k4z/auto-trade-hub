import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
