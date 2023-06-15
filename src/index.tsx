import { StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { Theme } from "./styles/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const bodyGlobalStyles = (
  <GlobalStyles styles={{ body: { backgroundColor: "#585858" } }} />
);

root.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
        <CssBaseline />
        {bodyGlobalStyles}
        <App />
    </ThemeProvider>
  </StrictMode>
);