// components/Footer.js

import React from "react";
import Image from "next/image";
// import './styles.css';
import style from "./styles.module.css";
import { useTheme } from "next-themes";

// import './landingGlobal.css';

const Footer = ({
  scrollToRef,
  PaymentMethodsRef,
  howItWorksRef,
  FAQRef,
  HeroRef,
}) => {
  const { theme } = useTheme();
  return (
    <footer className=" text-black dark:text-white e p-4 ">
      <div className="px-20 mx-auto max-lg:flex-col flex justify-between items-center ">
        <div
          onClick={() => scrollToRef(HeroRef)}
          className="cursor-pointer w-1/5 max-lg:flex max-lg:flex-col max-lg:items-center"
        >
          {/* Left Section */}
          <Image className="" src="/fyp2.jpg" width={80} height={80} />
        </div>

        <div className="  w-[100%] mr-[15%] max-lg:mr-0 max-lg:w-[100%] flex max-lg:flex-col max-lg:items-center justify-center max-lg:space-x-0 space-x-4">
          {/* Middle Sections  */}
          <div className="px-4 max-lg:mt-[1rem] max-lg:w-[100%] max-lg:flex max-lg:flex-col items-center">
            <p className="font-poppins max-lg:text-xl  font-sans text-base font-semibold leading-8">
              Product
            </p>
            <div className=" max-lg:w-[100%] font-dm-sans max-lg:flex max-lg:flex-col max-lg:items-center text-gray-500 text-sm font-light leading-5 py-4">
              <p
                onClick={() => scrollToRef(PaymentMethodsRef)}
                className="cursor-pointer py-1 max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo"
              >
                Packages
              </p>
              <p
                onClick={() => scrollToRef(howItWorksRef)}
                className="cursor-pointer py-1 max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo"
              >
                Team
              </p>
              <p
                onClick={() => scrollToRef(howItWorksRef)}
                className="cursor-pointer py-1 max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo"
              >
                How it works
              </p>
              <p
                onClick={() => scrollToRef(FAQRef)}
                className="cursor-pointer py-1 max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo"
              >
                FAQ
              </p>
            </div>
          </div>
          <div className="px-4 max-lg:mt-[1rem] max-lg:w-[100%] max-lg:flex max-lg:flex-col items-center">
            <p
            className="font-poppins max-lg:text-xl font-sans text-base font-semibold leading-8">
              Company
            </p>
            <div className="max-lg:w-[100%] font-dm-sans max-lg:flex max-lg:flex-col max-lg:items-center text-gray-500 text-sm font-light leading-5 py-4">
              <p 
              onClick={() => scrollToRef(HeroRef)}
              className="cursor-pointer py-1 max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo">
                Careers
              </p>
              {/* <p className="py-1 max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo">
                Contact
              </p>
              <p className="py-1 max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo">
                Privacy Policy
              </p> */}
              <p
              onClick={() => scrollToRef(howItWorksRef)}
              className="py-1 cursor-pointer max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo">
                Terms of Services
              </p>
            </div>
          </div>
          <div className="px-4 max-lg:mt-[1rem] max-lg:w-[100%] max-lg:flex max-lg:flex-col items-center">
            <p className="font-poppins max-lg:text-xl font-sans text-base font-semibold leading-8">
              Community
            </p>
            <div className="max-lg:w-[100%] font-dm-sans max-lg:flex max-lg:flex-col max-lg:items-center  text-gray-500 text-sm font-light leading-5 py-4">
              {/* <p className="py-1 max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo">
                Community Stories
              </p> */}
              <p className="py-1 max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo">
                <a
                  href=""
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </p>
              <p className="py-1 max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo">
                <a
                  href=""
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </p>
              {/* <p className="py-1 max-lg:py-2 max-lg:border-b-[1px] max-lg:border-elementGradTwo">
                YouTube
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-end max-lg:mb-[1rem]">
        <div className="text-center max-lg:w-[100%] w-[60%] flex max-lg:flex-col max-lg:items-center justify-between">
          <p className="font-dm-sans text-black dark:text-white  text-sm font-light leading-5 py-4">
            Copyright © 2024 Screenify. All rights reserved.
          </p>
          <div className="flex items-center mr-[2rem] gap-5 max-lg:w-[100%] max-lg:mr-0 max-lg:justify-center">
            <a
              href="https://www.linkedin.com/company/recruitinn-ai/about"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image
                src={
                  theme === "light"
                    ? "linkedin-light.svg"
                    : "/LinkedInWhite.svg"
                }
                width={40}
                height={40}
              />
            </a>
            <a
              // href="https://twitter.com/recruitinn"
              className="rounded-lg bg-white"
              href="https://www.facebook.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook.svg"
                width={theme === "light" ? 45 : 40}
                height={theme === "light" ? 45 : 40}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <Image
                src={theme === "light" ? "/instagram-light.svg" : "/insta.svg"}
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
