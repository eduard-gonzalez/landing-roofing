import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-xl font-semibold text-gray-900 dark:text-white"
    >
      Techado<span className="text-gold-500">Premium</span>
    </Link>
  );
}

export default Logo;
