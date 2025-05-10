import Image, { StaticImageData } from "next/image";

const Selm = ({
  img,
  pic,
  title,
}: {
  img: string | StaticImageData;
  pic: string | StaticImageData;
  title: string;
}) => {
  return (
    <div className="absolute w-full h-screen overflow-hidden -z-10">
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover hidden md:block"
        loading="lazy"
        priority={false}
        unoptimized
      />
      <Image
        src={pic}
        alt={title}
        fill
        className="object-cover md:hidden"
        loading="lazy"
        priority={false}
        unoptimized
      />
    </div>
  );
};

export default Selm;
