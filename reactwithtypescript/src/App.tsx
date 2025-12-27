import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout";
import CourseCartValue from "./components/CourseCartValue";
import CourseList from "./components/CourseList";
import ItemCourseSelected from "./components/ItemCourseSelected";
import Location from "./components/Location";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Layout>
        <div className="container">
          <h1 className="mt-3">Course Schedule</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <CourseCartValue />
            </div>
            <div className="col-sm">
              <Location />
            </div>
          </div>
          <h3 className="mt-3">Course List</h3>
          <div className="row ">
            <div className="col-sm">
              <CourseList />
            </div>
          </div>
          <h3 className="mt-3">Add Course</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ItemCourseSelected />
            </div>
          </div>
        </div>
      </Layout>
    </AppProvider>
  );
};

export default App;
