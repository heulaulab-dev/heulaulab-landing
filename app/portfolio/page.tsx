import { PortfolioList } from 'app/components/portfolio'

export const metadata = {
  title: 'portfolio',
  description: 'Websites built by heulaulab and their current status.',
}

export default function PortfolioPage() {
  return (
    <section>
      <h1 className="mb-3 font-semibold text-2xl tracking-tighter">portfolio</h1>
      <p className="mb-8 text-neutral-700 dark:text-neutral-300">
        Websites we built. No fluff. Just output and current status.
      </p>
      <PortfolioList />
    </section>
  )
}
