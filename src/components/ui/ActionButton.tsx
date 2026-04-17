"use client";

import Image from "next/image";

type IconProp =
  | { type: "i"; className: string }
  | { type: "img"; src: string; alt?: string };

type ActionButtonProps = {
  label: string;
  icon?: IconProp;
  href?: string;
  scrollToId?: string;
  primary?: boolean;
  className?: string;
};

export function ActionButton({
  label,
  icon,
  href,
  scrollToId,
  primary = false,
  className = "",
}: ActionButtonProps) {
  const base =
    "flex items-center gap-2 px-5 py-4 text-md rounded-2xl transition-all duration-200";

  const primaryStyles = "bg-white text-black hover:bg-white/90";
  const secondaryStyles =
    "bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20";

  const renderIcon = () => {
    if (!icon) return null;
    if (icon.type === "i") return <i className={icon.className} />;
    return (
      <Image
        src={icon.src}
        alt={icon.alt ?? ""}
        width={16}
        height={16}
        className="object-contain"
        unoptimized
      />
    );
  };

  return (
    <a
      href={href ?? (scrollToId ? `#${scrollToId}` : "#")}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`${base} ${primary ? primaryStyles : secondaryStyles} ${className}`}
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
      {renderIcon()}
    </a>
  );
}
