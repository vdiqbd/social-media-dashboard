import Header from "@/components/Header";
import MediaCard from "@/components/MediaCard";
import { MediaCardProps } from "@/types/general";
import { Hanken_Grotesk } from "next/font/google";
import Head from "next/head";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

const data: MediaCardProps[] = [
  { count: "1432256", name: "facebook", username: "nathanf" },
  { count: "1432256", name: "twitter", username: "nathanf" },
  { count: "1432256", name: "instagram", username: "nathanf" },
  { count: "1432256", name: "youtube", username: "nathanf" },
  { count: "1432256", name: "tiktok", username: "nathanf" },
];

const Home = () => {
  const total = data.map((a) => parseInt(a.count)).reduce((a, b) => a + b, 0);

  return (
    <>
      <Head>
        <title>Social Media Dashboard</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center w-full max-w-6xl gap-8 ${hankenGrotesk.className}`}
      >
        <Header total={total} />

        <div className="w-full flex items-center justify-center gap-4 flex-wrap">
          {data.map((datum, i) => (
            <MediaCard
              count={datum.count}
              name={datum.name}
              username={datum.username}
              key={i}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
