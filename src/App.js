import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import "./App.css";
import BrandListPage from "./pages/BrandListPage";
import AddNewCarPage from "./pages/AddNewCarPage";
import ThemeProvider from "./utils/ThemeProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
            </Route>

            <Route path="/brand" element={<BrandListPage />} />
            <Route path="/add" element={<AddNewCarPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
