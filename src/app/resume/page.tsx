export default function ResumePage() {
  return (
    <div className="flex min-h-[450px] w-full items-center justify-center px-[5vw] py-[clamp(70px,10vh,80px)]">
      <div
        className="relative rounded-[20px] p-[2px] max-h-[85vh]"
        style={{
          width: "min(50vw, 600px)",
          aspectRatio: "8.5 / 11",
          background:
            "linear-gradient(135deg, rgba(120,120,120,0.6), rgba(255,255,255,0.15), rgba(120,120,120,0.6))",
        }}
      >
        <iframe
          src="/data/docs/Nicolas_Corfmat_Resume.pdf"
          title="Resume"
          className="h-full w-full translate-z-0 rounded-[18px] border-none bg-[#111] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
        />
      </div>
    </div>
  );
}
