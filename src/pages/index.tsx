import { Hanken_Grotesk } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

const Home = () => {
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
      </Head>
      <main
        className={`flex min-h-screen items-center justify-center ${hankenGrotesk.className}`}
      >
        <button
          className="text-black bg-white h-fit p-4 rounded-md font-bold text-xl md:text-2xl"
          onClick={() => push("app")}
        >
          Sign in with Google
        </button>
      </main>
    </>
  );
};

export default Home;
