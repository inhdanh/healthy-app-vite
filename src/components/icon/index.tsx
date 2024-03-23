interface Props {
  src: string;
  count?: number;
}

const Icon = ({ src, count }: Props) => {
  return (
    <div className="relative h-8 w-8">
      <img className="w-full h-full" src={src} alt="icon" />
      {count && (
        <div className="w-4 h-4 bg-primary/500 rounded-[50%] absolute -right-2 top-0 text-[10px] text-light">
          {count}
        </div>
      )}
    </div>
  );
};

export default Icon;
