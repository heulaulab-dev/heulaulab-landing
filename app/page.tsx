import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
		<section>
			<h1 className='mb-8 font-semibold text-2xl tracking-tighter'>
				meet heulaulab
			</h1>
			<p className='mb-4'>
				heulaulab is a multidisciplinary design lab working across digital and physical space. We build bold, unconventional systems from software interfaces to spatial experiences rooted in raw modernist principles and controlled imperfection. Not every brand needs to be liked. Some need to be remembered.
			</p>
			<div className='my-8'>
				<BlogPosts />
			</div>
		</section>
	);
}
