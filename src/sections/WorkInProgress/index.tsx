import { Link } from "react-router-dom";

export const WorkInProgress = () => {
  return (
    <main
      id="main"
      className="relative isolate flex min-h-[calc(100vh-76px)] items-center overflow-hidden bg-neutral-950 px-[5%] py-24 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_45%,rgba(234,88,12,0.22),transparent_48%)]"
      />
      <div className="mx-auto w-full max-w-[1280px]">
        <p className="mb-6 text-xs font-bold uppercase tracking-[2.5px] text-orange-400">
          Solas Limited · From Power to Plug
        </p>
        <h1 className="max-w-[900px] font-manrope text-5xl font-semibold leading-[1.05] tracking-[-2px] md:text-7xl md:tracking-[-4px]">
          We’re working on something new.
        </h1>
        <p className="mt-7 max-w-[620px] text-base leading-7 text-neutral-300 md:text-lg">
          This page is currently in progress. We’re preparing more information
          about our solutions and will have it ready soon.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex min-h-12 items-center justify-center border border-orange-600 bg-orange-600 px-7 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:border-orange-500 hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Return to home
        </Link>
      </div>
    </main>
  );
};
