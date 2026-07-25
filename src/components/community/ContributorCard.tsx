import Image from "next/image";
import Link from "next/link";

export interface ContributorCardProps {
  avatar: string;
  username: string;
  contributions: number;
  profileUrl: string;
}

export function ContributorCard({
  avatar,
  username,
  contributions,
  profileUrl,
}: ContributorCardProps) {
  return (
    <article className="w-full max-w-xs mx-auto rounded-2xl p-5 shadow-neu-raised bg-bg-elevated transition-shadow duration-[400ms] ease-out hover:shadow-neu-raised-hover">
      <Link
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center gap-2 sm:gap-3 no-underline text-inherit w-full h-full"
      >
        <Image
          src={avatar}
          alt={`${username} avatar`}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover shrink-0 shadow-neu-sunken-subtle"
        />
        <h3 className="text-base font-semibold text-content-primary break-words text-center">
          {username}
        </h3>
        <p className="text-sm text-content-secondary">
          {contributions}{" "}
          {contributions === 1 ? "contribution" : "contributions"}
        </p>
      </Link>
    </article>
  );
}
