import React from "react";
import "../../Stylesheets/Dashboard-styles/Dashboards.css";
import Navbar from "../../Components/Utility-components/Navbar";
import Sidebar from "../../Components/Utility-components/Sidebar";
import DashboardComponent from "../../Components/Pages-components/DashboardComponent";

const Dashboard = () => {
  return (
    <>
      <section className="main-dashboard">
        <Sidebar />
        <section className="dashboard-contents-container">
          <Navbar />
          <div className="dasboard-content-display">
            <DashboardComponent />
          </div>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
