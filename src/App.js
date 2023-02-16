import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./pages/list/List";
import NQuestion from "./pages/new/NQuestion";
import ViewQuestion from "./pages/Single/SQuestion";
import ResetPasswordForm from "./pages/auth/ResetPassword/ResetPass";
import NLogin from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Front from "./pages/Front/Front";
import Forgot from "./pages/auth/ForgotPass/ForgotPass";

// import RegisterComplaint from "./pages/Complaints/RegisterComplaint";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Front />} />
            <Route path="dashboard" element={<Home />} />
          </Route>

          <Route path="/questions">
            <Route index element={<Questions />} />
            <Route path="add" element={<NQuestion />} />
            <Route path=":id" element={<ViewQuestion />} />
          </Route>

          <Route>
            <Route path="/auth/login" element={<NLogin />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/reset-password" element={<Forgot />} />
            {/* <Route path="/auth/sw" element={<LL />} /> */}
            <Route path="auth/reset/:token" element={<ResetPasswordForm />} />
          </Route>

          <Route path="/profile">
            <Route index element={<Questions />} />
            <Route path="add" element={<NQuestion />} />
            <Route path=":id" element={<ViewQuestion />} />
          </Route>

          {/* <Route path="/support">
            <Route index element={<RegisterComplaint />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
