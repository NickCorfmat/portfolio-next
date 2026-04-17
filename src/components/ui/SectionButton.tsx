"use client";

type SectionButtonProps = {
  href?: string;
  label: string;
  primary?: boolean;
  scrollToId?: string;
};

export function SectionButton({
  href = "#",
  label,
  primary = false,
  scrollToId,
}: SectionButtonProps) {
  const base = "px-5 py-4 rounded-2xl transition-all duration-200 inline-block";

  const primaryStyles = "bg-white text-black hover:bg-white/90";
  const secondaryStyles =
    "bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20";

  return (
    <a
      href={href}
      className={`${base} ${primary ? primaryStyles : secondaryStyles}`}
      onClick={(e) => {
        if (scrollToId) {
          e.preventDefault();
          document
            .getElementById(scrollToId)
            ?.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {label}
    </a>
  );
}
