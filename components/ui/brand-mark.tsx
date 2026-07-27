import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  size?: number;
};

export function BrandMark({
  className = "h-10 w-10",
  size = 40,
}: BrandMarkProps) {
  return (
    <Image
      src="/apple-touch-icon.png"
      alt=""
      width={size}
      height={size}
      className={`${className} shrink-0 rounded-[22%] object-cover`}
      priority
    />
  );
}
