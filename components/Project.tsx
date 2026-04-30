import type { Project as ProjectType } from "@/lib/content";

type Props = {
  project: ProjectType;
};

export default function Project({ project }: Props) {
  return (
    <div className="mb-10 last:mb-0">
      <h4 className="mb-3 font-bold text-[16px] text-ink">
        {project.title}
        {project.place && (
          <span className="mt-0.5 block text-[14px] font-normal text-ink-soft">
            {project.place}
          </span>
        )}
      </h4>

      <p className="mb-2 max-w-[700px] text-[14px] leading-[1.55] text-ink">
        {project.summary}
      </p>

      {project.bullets && project.bullets.length > 0 && (
        <ul className="dash-list">
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {project.link && (
        <a
          href={project.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block border-b border-ink/40 pb-px text-[13px] font-medium text-ink transition-colors duration-200 hover:border-ink"
        >
          {project.link.label} →
        </a>
      )}
    </div>
  );
}
