import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center py-8 w-full bg-neutral-800">
      <p>
        <Link href="https://github.com/gabhiinav">
          <a
            className="hover:text-brand-400 hover:underline underline-offset-2"
            target="_blank"
          >
            2023
          </a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
