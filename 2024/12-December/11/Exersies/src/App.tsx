import Nav from "./components/Nav";
import { link } from "./types/link";

export default function App() {
  const links: link[] = [
    { label: "Home", to: "#" },
    { label: "contact", to: "#" },
    { label: "About", to: "#" },
  ];
  return (
    <div className="flex-col ">
      <Nav links={links} />

      <main className=" mt-6 gap-2 w-fit">
        <div className="bg-slate-500 mx-4 rounded">
          <h4 className="text-center font-bold text-2xl ">baba</h4>
          <p>i am the best</p>
          <button className="bg-sky-500 hover:bg-sky-600 px-3 py-2 rounded text-white">
            click me
          </button>
          <button className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded text-white">
            do not click me
          </button>
        </div>
      </main>
    </div>
  );
}
