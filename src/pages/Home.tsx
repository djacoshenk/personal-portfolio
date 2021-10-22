import { Commits } from "components/Commits";
import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";

export const Home = () => {
  return (
    <div className="w-screen h-screen bg-gray-800">
      <NavBar />
      <div className="w-full flex items-center justify-center">
        <div
          className="w-11/12 mx-auto px-6 flex flex-col items-start justify-center lg:w-9/12 2xl:w-8/12"
          style={{ height: "calc(100vh - 160px)" }}
        >
          <p className="text-green-400 font-mono">Hi, my name is</p>
          <div className="py-6">
            <p className="text-white text-5xl font-sans sm:hidden">Danny</p>
            <p className="text-white text-5xl font-sans pt-4 sm:hidden">Jacoshenk</p>
            <p className="hidden text-white text-5xl font-bold font-sans sm:block">Danny Jacoshenk</p>
          </div>
          <p className="text-gray-400 font-mono">
            I’m a former civil engineer who worked in the public and private sectors for 5 years designing commercial
            and residential developments. For 1+ years now, I’ve developed web applications using modern frontend
            languages and frameworks, such as TypeScript and React.
          </p>
          <Commits />
        </div>
      </div>

      <Footer />
    </div>
  );
};
