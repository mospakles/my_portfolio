import React from "react";
// import myPic from "../images/pic.jpeg";

const About = () => {
  return (
    <div className="h-full md:h-screen w-full text-black dark:text-white dark:bg-black bg-gray-200">
      <div className="flex flex-col md:flex-row justify-center items-center p-3">
        <img
          src="/images/pic.jpeg"
          alt="about"
          className="w-full md:w-1/2 h-[80vh] object-contain rounded-full"
        />
        <div className="p-5 md:w-1/2">
          <h1 className="text-4xl font-bold mb-3">About Me</h1>
          <p className="mb-3">
            Hi there! I'm Mo, a frontend developer specializing in React,
            Angular, and Next.js. With 2 years of experience, I excel at
            creating visually appealing web applications that provide
            exceptional user experiences.
          </p>
          <p className="mb-3">
            I have a deep understanding of JavaScript and its frameworks,
            allowing me to efficiently transform design concepts into
            interactive and dynamic web interfaces. I collaborate effectively
            with cross-functional teams, follow Agile practices, and ensure
            timely project delivery.
          </p>
          <p className="mb-3">
            My proficiency in React, Angular, and Next.js enables me to build
            responsive, feature-rich applications that prioritize performance
            and maintainability. I focus on component-based architecture, state
            management, and seamless API integration.
          </p>
          <p className="mb-3">
            Driven by continuous learning, I stay up to date with the latest
            frontend trends, attending conferences, taking online courses, and
            engaging in developer communities. I'm passionate about creating
            interfaces that are both visually appealing and intuitive to use.
          </p>
          <p className="mb-3">
            My skills extend beyond coding as I am well-versed in content
            management systems (CMS) such as WordPress, Shopify, and Sanity.
            This allows me to seamlessly integrate and customize designs into
            user-friendly and feature-rich websites, providing clients with
            dynamic and easily manageable online platforms.
          </p>
          <p className="mb-3">
            I am excited to collaborate with forward-thinking clients who value
            exceptional frontend development and a user-centric approach. Let's
            work together to bring your ideas to life and create an exceptional
            digital experience that engages and captivates your target audience
          </p>
          <h2 className="text-3xl font-bold mb-3">Objective</h2>
          <p>
            To obtain a challenging role as an Intermediate Frontend Developer
            where my technical skills and creativity will be utilized to develop
            visually appealing and user-friendly web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
