type SectionHeaderProps = {
  label: string;
  className?: string;
};

export function SectionHeader({ label, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 flex items-center gap-6 ${className}`}>
      <span className="text-md shrink-0 tracking-[0.1em] text-white uppercase">
        {label}
      </span>
    </div>
  );
}
