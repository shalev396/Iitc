import { BrowserRouter, Route, Routes } from "react-router-dom";

import Page from "./app/dashboard/page";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page route="home" />} />
          <Route path="/recipes" element={<Page route="recipes" />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
