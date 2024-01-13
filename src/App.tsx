import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Header from "./structure/Header";
import Footer from "./structure/Footer";
import About from "./components/About";
import Perfil from "./components/Perfil";
import ProtectedRoute from "./components/ProtectedRoutes";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ErrorBoundary fallback={<ErrorPage />}> */}
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/login" Component={Login} />

          <Route Component={ProtectedRoute}>
            <Route path="/perfil" Component={Perfil} />
          </Route>

          <Route path="*" Component={NotFound} />
        </Routes>
        <Footer />
        {/* </ErrorBoundary> */}
      </BrowserRouter>
    </>
  );
}

export default App;
