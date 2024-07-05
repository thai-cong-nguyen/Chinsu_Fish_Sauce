"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "/public/logo.png"; // Ensure this path is correct

const links = [
  { path: "/", name: "home" },
  { path: "/our-story", name: "our story" },
  { path: "/products", name: "products" },
  { path: "/recipes", name: "recipes" },
  { path: "/gallery", name: "gallery" },
  { path: "/news", name: "news" },
];

export const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  const getLinkClassName = (linkPath) =>
    `uppercase cursor-pointer ${linkStyles} ${
      linkPath === path ? "text-red-700" : "hover:text-red-700 "
    }`;

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        if (index === Math.floor(links.length / 2 + 1)) {
          return (
            <React.Fragment key={`fragment-${index}`}>
              <Image src={logo} width={200} height={200} alt="logo" />
              <Link href={link.path} className={getLinkClassName(link.path)}>
                {link.name}
              </Link>
            </React.Fragment>
          );
        }
        return (
          <Link
            key={index}
            href={link.path}
            className={getLinkClassName(link.path)}
          >
            {link.name}
          </Link>
        );
      })}
      {/* where to buy */}
      <div className="">
        <span className="uppercase hover:text-red-700 cursor-pointer ">
          Where to buy
        </span>
      </div>
    </nav>
  );
};
