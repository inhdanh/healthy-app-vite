import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  text: string;
}

const clipPath = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";

const Hex = ({ icon, text, ...props }: Props) => {
  return (
    <button
      style={{ clipPath }}
      className="relative h-32 w-32 bg-gradient-to-tr from-primary/300 to-primary/400 flex flex-col justify-center items-center"
      {...props}
    >
      {/* <img src={imgHex} /> */}

      <img className="" src={icon} />
      <span className="text-sm md:text-lg leading-6 font-sans font-normal text-light">
        {text}
      </span>
    </button>
  );
};

export default Hex;
