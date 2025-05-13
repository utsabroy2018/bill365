// import AnimatedRow from "@/component/AnimatedRow";
import { AnimatedRow } from "@/component/AnimatedRow";
import { AppleCardsCarouselDemo } from "@/component/AppleCardsCarouselDemo";
import HeaderTop from "@/component/Header_top";
import HomeFeatureSection from "@/component/HomeFeatureSection";
import { HeroSectionOne } from "@/component/HomeWelcome";
// import HomeWelcome from "@/component/HomeWelcome";
import Navbar from "@/component/Navbar";
import Image from "next/image";
// import { motion } from "framer-motion";
import styles from '../style/Home.module.css'
import HomeMobileFeature from "@/component/HomeMobileFeature";
import HomeBlueSection from "@/component/HomeBlueSection";
import { HomeTestimonials } from "@/component/HomeTestimonials";
import HomeBlogList from "@/component/HomeBlogList";
import HomeFaq from "@/component/HomeFaq";
import HomeBillboardCTA from "@/component/HomeBillboardCTA";

const rows = [
  {
    content: {
      title: `<span>Hassle-free Online Billing Software</span> Create Invoices at Lightning Speed with Our Billing Software`,
      shortText: "A customized and exclusive toolkit of management features makes Bill365 an ideal billing software in India for retailers. In less than a second, it generates bills. Let’s make billing a harmonious process!",
      fullText: "A customized and exclusive toolkit of management features makes Bill365 an ideal billing software in India for retailers. In less than a second, it generates bills. Let’s make billing a harmonious process!"
    },

    image: "/feature-item-1-1.webp",
  },
  {
    content: {
      title: "<span>Hassle-free Online Billing Software</span> Create Invoices at Lightning Speed with Our Billing Software",
      shortText: "A customized and exclusive toolkit of management features makes Bill365 an ideal billing software in India for retailers. In less than a second, it generates bills. Let’s make billing a harmonious process!",
      fullText: "A customized and exclusive toolkit of management features makes Bill365 an ideal billing software in India for retailers. In less than a second, it generates bills. Let’s make billing a harmonious process!"
    },
    image: "/feature-item-1-1.webp",
    reverse: true,
  },
  {
    content: {
      title: "<span>Hassle-free Online Billing Software</span> Create Invoices at Lightning Speed with Our Billing Software",
      shortText: "A customized and exclusive toolkit of management features makes Bill365 an ideal billing software in India for retailers. In less than a second, it generates bills. Let’s make billing a harmonious process!",
      fullText: "A customized and exclusive toolkit of management features makes Bill365 an ideal billing software in India for retailers. In less than a second, it generates bills. Let’s make billing a harmonious process!"
    },
    image: "/feature-item-1-1.webp",
  },
  {
    content: {
      title: "<span>Hassle-free Online Billing Software</span> Create Invoices at Lightning Speed with Our Billing Software",
      shortText: "A customized and exclusive toolkit of management features makes Bill365 an ideal billing software in India for retailers. In less than a second, it generates bills. Let’s make billing a harmonious process!",
      fullText: "A customized and exclusive toolkit of management features makes Bill365 an ideal billing software in India for retailers. In less than a second, it generates bills. Let’s make billing a harmonious process!"
    },
    image: "/feature-item-1-1.webp",
    reverse: true,
  },
];


const features = [


  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]


export default function Home() {


  return (
    <>
      <HeaderTop />
      {/* <BannerBottomScroll /> */}
      <AppleCardsCarouselDemo />
      <HeroSectionOne />
      {/* <HomeFeatureSection /> */}

      <div className="container mx-auto px-4 py-3">
        {rows.map((row, index) => (
          <AnimatedRow
            key={index}
            content={row.content}
            image={row.image}
            reverse={row.reverse}
          />
        ))}
      </div>


      <HomeMobileFeature data={features} />

      <HomeBlueSection />

      <HomeTestimonials />

      <HomeBlogList />

      <HomeFaq />

      <HomeBillboardCTA />

      


    </>
  );
}
