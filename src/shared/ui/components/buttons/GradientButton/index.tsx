export const GradientButton = () => {
  return (
    <div className="w-[40px] h-[40px] px-4 py-3 relative bg-gradient-button shadow-button rounded-full justify-center items-center gap-2 inline-flex">
      {/* Plus icon */}
      {/* <div className="text-white text-[28px] font-open-sans font-semibold">
        +
      </div> */}

      {/* Glossy highlight border */}
      {/* <div className="w-[90%] h-[90%] absolute rounded-full border-2 border-[#FDE7FC] blur-[0.39px]" /> */}

      {/* Glossy highlight overlay */}
      <div className="w-3 h-4 left-[35%] top-1 absolute mix-blend-overlay bg-gradient-to-b from-white/56 to-white/9 rounded-[90px]" />
    </div>
  );
};
