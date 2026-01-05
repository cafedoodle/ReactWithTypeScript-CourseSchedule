// src/App.tsx
import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout";
import CoursePlannerPAge from "./pages/CoursePlannerPage";
import InfoPage from "./pages/InfoPage";
import CollegeListPage from "./pages/CollegeListPage";
import DepartmentListPage from "./pages/DepartmentListPage";
import CourseListPage from "./pages/CourseListPage";
import DemoPage from "./pages/DemoPage";
import ErrorBoundary from "./errorboundaries/ErrorBoundary";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CoursePlannerPAge />} />
              <Route path="info" element={<InfoPage />} />
              <Route path="colleges" element={<CollegeListPage />} />
              <Route path="departments" element={<DepartmentListPage />} />
              <Route path="courses" element={<CourseListPage />} />
              <Route path="demo" element={<DemoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
