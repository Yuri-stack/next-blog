import { PostPage } from "@/templates/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "posts/posts";

type BlogPostPageProps = {
    params: Promise<{ slug: string }>   // esse 'slug' é devido o nome da pasta que esse arquivo está. Outro nome de pasta, outro nome de prop.
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        return {};
    }

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: post.author.name }],
        robots: 'index, follow',
        openGraph: {
            images: [post.image],
        },
    };
}

export const revalidate = 60;

export async function generateStaticParams() {
    return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = posts.find((post) => post.slug === slug);

    if (!post) notFound();  // redireciona ao 404 page

    return (
        <PostPage post={post} />
    )
}
