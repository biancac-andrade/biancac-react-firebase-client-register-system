import Home from "./page/Home";
import Cadastro from "./page/Create";
import Signup from "./page/Signup";
import Login from "./page/Login";
import List from "./page/Read";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/widgets/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Update from "./page/Update";

function App() {
  return (
    <Router>
      <div className="App bg-primary">
        <section>
          <div>
            <Routes>
              <Route
                path="/home"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />

              <Route
                path="/create"
                element={
                  <Layout>
                    <Cadastro />
                  </Layout>
                }
              />

              <Route
                path="/read"
                element={
                  <Layout>
                    <List />
                  </Layout>
                }
              />
              <Route
                path="/update"
                element={
                  <Layout>
                    <Update />
                  </Layout>
                }
              />

              <Route path="/" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
