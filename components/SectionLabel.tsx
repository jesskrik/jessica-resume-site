type Props = {
  label: string;
};

export default function SectionLabel({ label }: Props) {
  return (
    <div className="reveal section-counter mb-10 flex items-baseline gap-4 text-[11px] uppercase tracking-widest3 text-ink-soft">
      {label}
    </div>
  );
}
