import React from "react";
import Footer from "./Footer";
import "./Home.css"; // Import the CSS file
import Card from "./Card";
//Importing the images
import petCareImage from "../assets/images/petCare.webp";
import furnitureImage from "../assets/images/furniture.png";
import electricianImage from "../assets/images/electrician.jpg";
import plumbingImage from "../assets/images/plumbing.jpeg";

const Home = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Taskify
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                {/* Correct Bootstrap Dropdown for Services */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="servicesDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Pet Care
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Electrician
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Plumbing
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Furniture
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Signup/Login */}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Signup/Login
                  </a>
                </li>

                {/* Become a Co-Tasker Button */}
                <li className="nav-item">
                  <a className="btn btn-success ms-3" href="#">
                    Become a Co-Tasker
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Taskify</h1>
          <p>Your go-to platform for seamless task management.</p>
        </div>
      </section>

      <main className="main-content">
        <div className="card-container">
          <Card
            image={petCareImage}
            title="Pet Care"
            text="Professional pet care services for your furry friends."
            link="#pet-care"
          />
          <Card
            image={furnitureImage}
            title="Furniture"
            text="Furniture assembly, repair, and custom design services."
            link="#furniture"
          />
          <Card
            image={electricianImage}
            title="Electrician"
            text="Expert electrical services for residential and commercial needs."
            link="#electrician"
          />
          <Card
            image={plumbingImage}
            title="Plumbing"
            text="Reliable plumbing services for any issues, big or small."
            link="#plumbing"
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
