type SectionHeaderProps = {
  label: string;
  className?: string;
};

export function SectionHeader({ label, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-6 mb-12 ${className}`}>
      <span className="text-md tracking-[0.1em] uppercase text-white/50 shrink-0">
        {label}
      </span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}
