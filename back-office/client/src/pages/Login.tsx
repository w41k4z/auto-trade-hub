import { Helmet } from "react-helmet-async";
import { LoginView } from "../sections/login/view";

function App() {
  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <LoginView />
    </>
  );
}

export default App;
