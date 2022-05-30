import { Provider } from "react-redux";
import Router from "./router";
import store from "./reducers/store";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
