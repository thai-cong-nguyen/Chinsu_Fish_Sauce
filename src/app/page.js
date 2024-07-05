import Image from "next/image";

import Button from "@mui/material/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import image1 from "/public/image1.jpg";
import cacom from "/public/cacom.jpg";
import salmon from "/public/salmon.jpg";
import comtam from "/public/comtam.jpg";
import goicuon from "/public/goicuon.jpg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Image
        src={image1}
        style={{ width: "100%", height: "auto" }}
        alt="image1"
      />
      <div className="flex flex-col items-center justify-center py-10 gap-4">
        <div className="flex flex-col items-center justify-center gap-4 w-[1000px] text-xl leading-10">
          <span className="text-red-700 font-bold text-4xl uppercase">
            Our sauces
          </span>
          <span className="text-center">
            Vietnamese cuisine is celebrated for its rich tapestry of flavors
            and ingredients. CHIN-SU, renowned for its exceptional quality,
            offers a range of sauces that capture the essence of Vietnamese
            culinary tradition.
          </span>
          <span className="text-center">
            CHIN-SU Fish Sauce is a premium Vietnamese condiment crafted to
            elevate your dining experience. Made from the finest anchovies and
            sea salt, it undergoes a meticulous fermentation process to develop
            its deep, savory umami flavor. This fish sauce is a staple in
            Vietnamese kitchens and beloved by chefs worldwide, adding
            authenticity and depth to dishes like phở, spring rolls, and
            marinades.
          </span>
        </div>

        <div className="flex flex-row items-center justify-center gap-5 font-bold text-2xl uppercase text-red-700">
          <div className="flex flex-col items-center justify-center">
            <Image src={cacom} width={185} height={300} alt="image1" />
            <span>Anchovies Sauce</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={salmon} width={300} height={300} alt="image1" />
            <span>Salmon Sauce</span>
          </div>
        </div>
      </div>
      <div className="bg-red-900 text-white flex flex-row items-center justify-center">
        <div className="w-1/2">
          <Image
            src={comtam}
            style={{ width: "100%", height: "auto" }}
            className="object-center"
            alt="comtam"
          />
        </div>

        <div className="flex flex-col justify-center w-1/2 px-10 gap-4">
          <div className="flex flex-col justify-center font-bold uppercase">
            <span className="text-3xl">Anchovies Sauce</span>
            <span className="text-2xl">Premium Vietnamese Fish Sauce</span>
          </div>
          <div className="flex flex-col ">
            <span>
              Anchovies Sauce is a condiment made from fermented anchovies,
              known for its strong, pungent flavor. It is used to add depth and
              umami to various dishes, particularly in Mediterranean cuisine.
              The sauce is made by curing anchovies in salt, then mashing them
              into a paste or sauce, often with added vinegar, oil, or spices.
            </span>
          </div>
          <Button className="w-[100px] text-white  border-4 hover:bg-opacity-30 gap-1 hover:border-white">
            <span>Explore</span>
            <ArrowCircleRightIcon />
          </Button>
        </div>
      </div>
      <div className="bg-black text-white flex flex-row items-center justify-center">
        <div className="flex flex-col justify-center w-1/2 px-10 gap-4">
          <div className="flex flex-col justify-center font-bold uppercase">
            <span className="text-3xl">Salmon Sauce</span>
            <span className="text-2xl">
              Well-rounded Taste, Umami Flavor Booster
            </span>
          </div>
          <div className="flex flex-col ">
            <span>
              Salmon Sauce is a versatile condiment made from salmon, offering a
              well-rounded taste and serving as a powerful umami flavor booster.
              Ideal for enhancing various dishes, it adds depth and richness to
              your culinary creations.
            </span>
          </div>
          <Button className="w-[100px] text-white  border-4 hover:bg-opacity-30 gap-1 hover:border-white">
            <span>Explore</span>
            <ArrowCircleRightIcon />
          </Button>
        </div>
        <div className="w-1/2">
          <Image
            src={goicuon}
            style={{ width: "100%", height: "auto" }}
            className="object-center"
            alt="goicuon"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-black gap-5">
        <div className="flex flex-col justify-center items-center text-white gap-5">
          <span className="text-3xl font-bold uppercase">
            THE ORIGINAL VIETNAMESE HOT SAUCE
          </span>
          <span className="text-xl">
            The most-loved hot sauce in Vietnam shall add a kick of heat and
            robust flavor to your everyday meals!
          </span>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wRduM7MQ5vw?si=CduSOOJqUrkbNuKC"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </main>
  );
}
