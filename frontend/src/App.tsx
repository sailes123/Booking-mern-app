import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <h1>HomePage</h1>
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <h1>SearchPage</h1>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
