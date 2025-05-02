import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
		<section>
			<h1 className='mb-8 font-semibold text-2xl tracking-tighter'>
				meet Heulaulab
			</h1>
			<p className='mb-4'>
				Heulaulab is a software engineer and designer who loves to create
				beautiful and functional web applications. He has a passion for learning
				new technologies and sharing his knowledge with others.
			</p>
			<div className='my-8'>
				<BlogPosts />
			</div>
		</section>
	);
}
