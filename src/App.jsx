import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Budget from "./components/Budget";
import Expense from "./components/Expense";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgetPass from "./components/ForgetPass";

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
