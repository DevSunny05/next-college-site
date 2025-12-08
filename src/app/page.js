import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
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
  );
}
