import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="header">
        <Navbar />

        <div className="text-box">
          <h1>Worlds Biggest Univercity</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus perspiciatis <br></br> illum nostrum assumenda nulla
            dignissimos nam natus nesciunt voluptatum omnis.
          </p>
          <Link href={"/"} className="hero-btn">
            Visit Us To Know More
          </Link>
        </div>
      </div>
      <section className="course">
        <h1>Courses We Offer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, esse.
        </p>

        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              quae minima, fugit fuga excepturi accusamus architecto ratione
              optio ad cum et velit nihil nemo asperiores nulla vero. Itaque,
              autem consequatur.
            </p>
          </div>

          <div className="course-col">
            <h3>Degree</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              quae minima, fugit fuga excepturi accusamus architecto ratione
              optio ad cum et velit nihil nemo asperiores nulla vero. Itaque,
              autem consequatur.
            </p>
          </div>

          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              quae minima, fugit fuga excepturi accusamus architecto ratione
              optio ad cum et velit nihil nemo asperiores nulla vero. Itaque,
              autem consequatur.
            </p>
          </div>
        </div>
      </section>

      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, esse.
        </p>

        <div className="row">
          <div className="campus-col">
            <img src="/london.png" alt="campus1" />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>

          <div className="campus-col">
            <img src="/newyork.png" alt="campus1" />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>

          <div className="campus-col">
            <img src="/washington.png" alt="campus1" />
            <div className="layer">
              <h3>WASHINGTON</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
