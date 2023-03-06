import React from "react";
import IconsContact from "../pages/Home/IconsContact";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className=" h-auto sm:min-h-[80vh] bg-blue-dark text-white p-16 ">
      <div className="text-white  grid grid-cols-1 sm:grid-cols-3 gap-4 content-center ">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">Contact me!</h2>
          <h3 className="mt-5 font-bold text-xl">Contact info</h3>
          <h4 className="">diego.quisbert77@gmail.com</h4>
          <h4 className="">Adress Av La pulida Pueblo</h4>
        </div>
        <div className=" text-center">
          <h2 className="text-4xl font-extrabold mb-4">What I Do?</h2>
          <h4 className="">Web Developer</h4>
          <h4 className="">Software sistems</h4>
          <h4 className="">Software Maintenance</h4>
          <h4 className="">Software Design</h4>
        </div>
        <div className=" text-center">
          <ContactForm />
        </div>
      </div>
      <hr className="mt-20" />

      <div className="h-20 text-center mt-10 flex flex-col items-center">
        <IconsContact />
        <div className="mt-4">All rights reserved by ©Diego Quisbert 2023</div>
      </div>
    </div>
  );
};

export default Footer;
