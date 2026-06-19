import Image from "next/image";

type ProfilePhotoProps = {
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function ProfilePhoto({
  alt,
  sizes,
  className = "",
  priority = false,
}: ProfilePhotoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-full ring-1 ring-border ${className}`}
    >
      <Image
        src="/profile.png"
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="scale-[1.22] object-cover object-[28%_26%]"
      />
    </div>
  );
}
