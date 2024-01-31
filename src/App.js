import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./authentication/SignIn";
import Upload from "./pages/Upload";
import RouteLayout from "./pages/RouteLayout";
import Invoice from "./pages/Invoice";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import Schedule from "./pages/Schedule";
import Calender from "./pages/Calender";
import Notification from "./pages/Notification";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />

          <Route path="/base" element={<RouteLayout />}>
            <Route index element={<Upload />} />
            <Route path="/base/invoice" element={<Invoice />} />
            <Route path="/base/dashboard" element={<Dashboard />} />
            <Route path="/base/notification" element={<Notification />} />
            <Route path="/base/setting" element={<Setting />} />
            <Route path="/base/schedule" element={<Schedule />} />
            <Route path="/base/calender" element={<Calender />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
