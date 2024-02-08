import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";



const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})`, marginTop: "0px" }}>
        <div className="headerContainer" style={headerContainerStyle}>
          <h1 style={{ color: "#fff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}>Food Website</h1>
          <p style={{ color: "#f0f0f0", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)" }}>Best Quality Food </p>
          <Link to="/menu">
            <button style={orderButtonStyle}>ORDER NOW</button>
          </Link>
          
        </div>
      </div>
    </Layout>
  );
};

const headerContainerStyle = {
  backgroundColor: "#333",
  padding: "20px",
  borderRadius: "10px",
  margin: "40px 80px",
  opacity: "0.8",
  animation: "fadeIn 2s ease-in",
};

const orderButtonStyle = {
  backgroundColor: "#ff9800",
  color: "#fff",
  padding: "15px 30px",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
};

export default Home;
