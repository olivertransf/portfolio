import Image from "next/image";

const profileImageClass =
  "object-cover scale-[1.18] object-[34%_32%]";

type ProfileArcsProps = {
  inset?: number;
};

function ProfileArcs({ inset = 6 }: ProfileArcsProps) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-border-strong"
      style={{ width: `calc(100% + ${inset * 8}px)`, height: `calc(100% + ${inset * 8}px)` }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="52 18"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="38 22 38 22"
        strokeLinecap="round"
        opacity="0.65"
        transform="rotate(-24 50 50)"
      />
      <circle
        cx="50"
        cy="50"
        r="52"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeDasharray="64 28"
        strokeLinecap="round"
        opacity="0.45"
        transform="rotate(108 50 50)"
      />
    </svg>
  );
}

type ProfileFrameProps = {
  className?: string;
};

export function ProfileFrame({ className = "" }: ProfileFrameProps) {
  return (
    <div className={`relative w-fit ${className}`}>
      <div className="relative h-44 w-44 sm:h-48 sm:w-48 lg:h-52 lg:w-52">
        <ProfileArcs />
        <div className="relative h-full w-full overflow-hidden rounded-full transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src="/profile.png"
            alt="Oliver Tran playing cello"
            fill
            priority
            sizes="(max-width: 1024px) 192px, 208px"
            className={profileImageClass}
          />
        </div>
      </div>
    </div>
  );
}

export { profileImageClass, ProfileArcs };
