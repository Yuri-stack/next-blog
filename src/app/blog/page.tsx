import { BlogList } from "@/templates/blog";
import { posts } from "posts/posts";

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
