import { Route, Routes } from "react-router-dom";
import AdminPage from "../components/admin/AdminPage";
import AdminLogin from "../components/AdminLogin";
import Staff_IDCard from "../components/icard/Staff_IDCard";
import Student_IDCard from "../components/icard/Student_IDCard";
import SnackbarAlert from "../components/SnackBarAlert";
import StaffIDCreate from "../components/StaffIDCreate";
import StaffLogin from "../components/StaffLogin";
import StudentIDCreate from "../components/StudentIDCreate";
import StudentLogin from "../components/StudentLogin";
import Home from "../container/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin-login" element={<AdminLogin />} />
        <Route exact path="/student-login" element={<StudentLogin />} />
        <Route exact path="/staff-login" element={<StaffLogin />} />
        <Route exact path="/admin-page" element={<AdminPage />} />
        <Route exact path="/staff-icard-create" element={<StaffIDCreate />} />
        <Route exact path="/student-icard" element={<Student_IDCard />} />
        <Route exact path="/staff-icard" element={<Staff_IDCard />} />
        <Route
          exact
          path="/student-icard-create"
          element={<StudentIDCreate />}
        />
      </Routes>
      <SnackbarAlert />
    </>
  );
}

export default App;
