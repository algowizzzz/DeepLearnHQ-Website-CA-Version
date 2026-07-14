import Link from "next/link";

interface AuthorCardProps {
  name: string;
  role: string;
  avatar?: string;
  slug: string;
}

export default function AuthorCard({ name, role, avatar, slug }: AuthorCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Link
      href={`/blog/author/${slug}`}
      className="flex items-center gap-4 transition-opacity hover:opacity-80"
    >
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E6FD9] text-sm font-bold text-white">
          {initials}
        </div>
      )}
      <div>
        <p className="font-semibold text-[#1a1a1a]">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </Link>
  );
}
