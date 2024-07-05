import React from "react";
import Image from "next/image";
import logo from "/public/logo.png"; // Ensure this path is correct
import { Button, Input } from "@mui/material";
import Link from "next/link";

export const Footer = () => {
  return (
    <main className=" flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col justify-center items-center bg-white w-full h-full p-10 gap-4">
        <span className="text-red-900 font-bold text-4xl">
          SUBSCRIBE TO GET MORE INFO
        </span>
        <span className="">
          Want the latest and greatest recipes, updates, and more from us,
          straight to your inbox? Subscribe and get our HOT NEWS!
        </span>
        <div className="bg-red-800 flex-row items-center rounded-2xl text-white p-2">
          <Input className="text-white" placeholder="Enter your email..." />
          <Button className="font-bold text-xl">SUBMIT</Button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center bg-black text-white w-full h-full p-10 gap-2">
        <Image src={logo} width={200} height={200} alt="logo" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-4">Social</h2>
            <ul>
              {["facebook", "instagram", "youtube", "twitter", "tiktok"].map(
                (social, index) => (
                  <li key={index} className="mb-2">
                    <Link href={`https://${social}.com`}>
                      <span className="hover:underline capitalize">
                        {social}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Shop</h2>
            <ul>
              {[
                "Original Hot Sauce",
                "Phở Hot Sauce",
                "Chí Thiện Hot Sauce",
                "Truffle Hot Sauce",
              ].map((item, index) => (
                <li key={index} className="mb-2">
                  <Link href="/">
                    <span className="hover:underline">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Explore</h2>
            <ul>
              {[
                "Find span Store",
                "Subscriptions",
                "Rewards",
                "Chin-Su Kitchen",
                "The Sauce",
              ].map((item, index) => (
                <li key={index} className="mb-2">
                  <Link href="/">
                    <span className="hover:underline">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Company</h2>
            <ul>
              {[
                "Contact Us",
                "FAQs",
                "Returns",
                "Privacy Policy",
                "Accessibility",
                "CCPA",
                "Terms of Use",
              ].map((item, index) => (
                <li key={index} className="mb-2">
                  <Link href="/">
                    <span className="hover:underline">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
