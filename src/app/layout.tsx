import type { Metadata } from 'next';
import { Layout } from "@/components/layout"
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: 'Site.Set',
	description: 'Venda seus produtos como afiliado em um único lugar',
	openGraph: {
		title: 'Site.Set',
		description: 'Venda seus produtos como afiliado em um único lugar',
		url: 'https://nextjs-fundamentos.vercel.app/og-image.jpg',
		siteName: 'Site.Set',
		locale: 'pt-BR',
		type: 'website',
		images: [
			{
				url: 'https://nextjs-fundamentos.vercel.app/og-image.jpg',
				width: 800,
				height: 600,
				alt: 'Site.Set',
			},
		],
	},
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body>
				<Layout>
					{children}
				</Layout>
			</body>
		</html>
	)
}
