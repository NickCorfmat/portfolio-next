export default function ResumePage() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <iframe
        src="/media/docs/Nicolas_Corfmat_Resume.pdf"
        className="w-[50%] h-auto"
        title="Resume"
      />
    </div>
  );
}
