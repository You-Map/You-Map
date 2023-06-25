import Router from "./Router";
import GlobalStyle from "./style/GlobalStyle";
import "./style/font.css";

export const APIURL = process.env.REACT_APP_APIURL;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
