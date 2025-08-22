import { BlogList } from "@/templates/blog";
import { posts } from "posts/posts";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Dicas e estratégias para impulsionar seu negócio',
    robots: 'index, follow',
    openGraph: {
        title: 'Blog',
        description: 'Dicas e estratégias para impulsionar seu negócio',
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

// Esse componente é um React Server Component (RSC).
// Tudo que estiver aqui, será executado do lado do Servidor
export default function BlogListPage() {
    const sortedPosts = posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <BlogList posts={sortedPosts} />
    )
}
