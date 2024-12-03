"use client";
// import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  // console.log(router.pathname);

  return (
    <>
      <div className="text-4xl px-2 py-4">About Us Page</div>
      {/* <Link href={`/}>
        <button className="border border-red-600 hover:bg-red-500 px-2 py-2 mx-4 rounded-md">
         Go Home
        </button>
      </Link> */}
      <button
        onClick={() => router.push("/")}
        className="border border-red-600 hover:bg-red-500 px-2 py-2 mx-4 rounded-md"
      >
        Go Home
      </button>
    </>
  );
};

export default About;
