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

      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          asperiores!
        </p>

        <div className="row">
          <div className="facilities-col">
            <img src="/library.png" alt="" />
            <h3>World Class Library</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              ullam exercitationem explicabo, libero ipsa officiis nam tempore
              accusantium dignissimos.
            </p>
          </div>

          <div className="facilities-col">
            <img src="/basketball.png" alt="" />
            <h3>Largest Play Ground</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              ullam exercitationem explicabo, libero ipsa officiis nam tempore
              accusantium dignissimos.
            </p>
          </div>

          <div className="facilities-col">
            <img src="/cafeteria.png" alt="" />
            <h3>Tasty and healthy Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse
              ullam exercitationem explicabo, libero ipsa officiis nam tempore
              accusantium dignissimos.
            </p>
          </div>
        </div>
      </section>

      <section className="testomonials">
        <h1>What Our Students Says</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illo in
          maxime.
        </p>
        <div className="row">
          <div className="testomonial-col">
            <img src="/user1.jpg" alt="" />
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis cum corrupti ea at id fugit consequatur. Vitae
                distinctio molestiae asperiores!
              </p>
              <h3>Rebecca Sebeca</h3>
            </div>
          </div>

          <div className="testomonial-col">
            <img src="/user2.jpg" alt="" />
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis cum corrupti ea at id fugit consequatur. Vitae
                distinctio molestiae asperiores!
              </p>
              <h3>Alberrto Zalaberto</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h1>Enroll for our various courses Anywhere from the world</h1>
        <Link href={"/"} className="hero-btn">
          CONTACT US
        </Link>
      </section>
    </>
  );
}
