export const MobileMenuOverlay = () => {
  return (
    <button
      aria-label="Close product menu"
      className="fixed text-black backdrop-blur bg-neutral-900/30 caret-transparent hidden outline-[3px] text-center z-[70] top-[90px] bottom-0 inset-x-0 md:top-[105px]"
    ></button>
  );
};