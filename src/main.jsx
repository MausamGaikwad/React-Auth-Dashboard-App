import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./ThemeContext.jsx";
import { UserProvider } from "./UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ThemeProvider>
);
