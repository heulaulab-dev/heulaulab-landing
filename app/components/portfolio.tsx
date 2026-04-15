type ProjectStatus = 'active' | 'inactive'

type PortfolioProject = {
  name: string
  url: string
  summary: string
  status: ProjectStatus
}

const portfolioProjects: PortfolioProject[] = [
  {
    name: 'Masjid Baiturrahim',
    url: 'https://www.masjidbaiturrahimsb.org/',
    summary: 'Website masjid for prayer schedule, services, kajian, and community information.',
    status: 'active',
  },
  {
    name: 'LLLARIK.id',
    url: 'https://www.lllarik.id/',
    summary: 'Brand site for curated furniture and expressive living collections.',
    status: 'active',
  },
  {
    name: 'Levicamp',
    url: 'http://levicamp.id/',
    summary: 'Booking reservation app website.',
    status: 'inactive',
  },
]

function StatusBadge({ status }: Readonly<{ status: ProjectStatus }>) {
  const isActive = status === 'active'

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium uppercase tracking-wide ${
        isActive
          ? 'border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-300'
          : 'border-neutral-300 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300'
      }`}
    >
      {status}
    </span>
  )
}

export function PortfolioList() {
  return (
    <div className="space-y-4">
      {portfolioProjects.map((project) => (
        <article
          key={project.name}
          className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold tracking-tight">{project.name}</h2>
            <StatusBadge status={project.status} />
          </div>

          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            {project.summary}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm underline underline-offset-4"
          >
            Visit site
          </a>
        </article>
      ))}
    </div>
  )
}
