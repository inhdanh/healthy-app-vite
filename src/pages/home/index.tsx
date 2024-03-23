import mainPhoto from "@/assets/images/main_photo.png";
import mainPhotoText from "@/assets/images/main_photo_text.png";
import iconKnife from "@/assets/icons/icon_knife.svg";
import iconCup from "@/assets/icons/icon_cup.svg";
import Hex from "@/components/hex";
import ImageCard from "@/components/image-card";
import m01 from "@/assets/images/m01.jpg";
import m02 from "@/assets/images/m02.jpg";
import m03 from "@/assets/images/m03.jpg";
import l01 from "@/assets/images/l01.jpg";
import l02 from "@/assets/images/l02.jpg";
import l03 from "@/assets/images/l03.jpg";
import d01 from "@/assets/images/d01.jpg";
import d02 from "@/assets/images/d02.jpg";
import Button from "@components/button";
import Chart from "@components/chart";

const LIST_IMG = [
  { src: m01, title: "05.21.Morning" },
  { src: m02, title: "05.21.Lunch" },
  { src: m03, title: "05.21.Dinner" },
  { src: l01, title: "05.21.Snack" },
  { src: l02, title: "05.20.Morning" },
  { src: l03, title: "05.20.Lunch" },
  { src: d01, title: "05.20.Dinner" },
  { src: d02, title: "05.21.Snack" },
];

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="relative w-full md:w-1/3">
          <img
            className="w-full h-full object-cover"
            src={mainPhoto}
            alt="main-photo"
          />
          <img
            className="absolute top-0 left-0 bottom-0 m-auto right-0 w-44 h-44]"
            src={mainPhotoText}
            alt="main-photo-text"
          />
        </div>
        <div className="w-full md:w-2/3 bg-chart">
          <Chart />
        </div>
      </div>
      <div className="flex gap-5 sm:gap-10 md:gap-16 lg:gap-20 justify-center mt-5">
        <Hex icon={iconKnife} text="Morning" />
        <Hex icon={iconKnife} text="Lunch" />
        <Hex icon={iconKnife} text="Dinner" />
        <Hex icon={iconCup} text="Snack" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 mx-auto gap-2 w-max">
        {LIST_IMG.map((item, index) => (
          <ImageCard key={index} src={item.src} title={item.title} />
        ))}
      </div>
      <div className="flex mt-7 justify-center mb-16">
        <Button>記録をもっと見る</Button>
      </div>
    </div>
  );
};

export default HomePage;

//path to image: src\asset\image\main_photo.png
