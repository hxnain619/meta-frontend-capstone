import React from "react";
import Meta from "../components/Meta";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonial";
import Header from "../components/Header";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Meta
        title="Little Lemon - Chicago"
        description="Welcome to Little Lemon, the best place in Chicago for fresh and delicious dishes."
        image="https://example.com/og-image.jpg"
        url="https://littlelemon.com"
      />
      <main className="bg-gray-100">
        <Header />
        <div className="mb-[8rem]" />
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
};

export default Home;
