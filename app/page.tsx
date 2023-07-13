import Head from "next/head";
import Logo from "@/components/Logo";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShowShuffle | Enjoy without knowing how!</title>
      </Head>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 min-h-screen p-4">
        <aside className="flex items-left flex-col gap-3 max-w-sm">
          <Logo />
          <p className="font-semibold font-sans">
            Random Episodes Generator!
          </p>
        </aside>
        <SearchInput />
      </div>
    </>
  );
}
