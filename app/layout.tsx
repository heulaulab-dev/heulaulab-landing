import './global.css'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Archivo, Cormorant_Garamond } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const primaryGrotesk = Archivo({
	subsets: ['latin'],
	weight: ['500', '600', '700', '800'],
	variable: '--font-primary',
});

const secondarySerif = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-secondary',
});

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: 'Heulaulab',
		template: '%s | Heulaulab',
	},
	description:
		'heulaulab is a multidisciplinary design lab working across digital and physical space. We build bold, unconventional systems from software interfaces to spatial experiences rooted in raw modernist principles and controlled imperfection. Not every brand needs to be liked. Some need to be remembered.',
	openGraph: {
		title: 'Heulaulab',
		description:
			'heulaulab is a multidisciplinary design lab working across digital and physical space. We build bold, unconventional systems from software interfaces to spatial experiences rooted in raw modernist principles and controlled imperfection. Not every brand needs to be liked. Some need to be remembered.',
		url: baseUrl,
		siteName: 'Heulaulab',
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			'index': true,
			'follow': true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={cx(
				'text-black bg-white dark:text-white dark:bg-black',
				primaryGrotesk.variable,
				secondarySerif.variable,
				GeistMono.variable,
			)}
		>
			<body className='mx-4 lg:mx-auto mt-8 max-w-xl antialiased [font-family:var(--font-primary)]'>
				<main className='flex flex-col flex-auto mt-6 px-2 md:px-0 min-w-0'>
					<Navbar />
					{children}
					<Footer />
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	);
}
