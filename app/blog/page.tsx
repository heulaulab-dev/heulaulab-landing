import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'blog',
  description: 'Read heulaulab blog.',
}

export default function Page() {
  return (
		<section>
			<h1 className='mb-8 font-semibold text-2xl tracking-tighter'>blog</h1>
			<BlogPosts />
		</section>
	);
}
