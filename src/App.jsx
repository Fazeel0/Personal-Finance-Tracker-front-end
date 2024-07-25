import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Budget from "./components/pages/Budget";
import Expense from "./components/pages/Expense";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import ForgetPass from "./components/pages/ForgetPass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />}/>
            <Route path="/budget" element={<Budget />}/>
            <Route path="/expense" element={<Expense />}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login/reset" element={<ForgetPass/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>

      </Router>
  );
}

export default App;
