// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import CarList from "./pages/CarList/CarList";
import CarDetail from "./pages/CarDetail/CarDetail";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Search" element={<CarList />} />
            <Route path="Search/:id" element={<CarDetail />} />
            <Route
              path="*"
              element={
                <>
                  <h1>Page Not Found</h1>
                  <h1>404</h1>
                </>
              }
            />
          </Routes>
        </Router>
      </Provider>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
