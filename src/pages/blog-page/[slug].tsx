import { PostPage as Post, type PostPageProps } from '@/templates/blog';
// import { allPosts } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps } from 'next';
import { posts } from 'posts/posts';

export default function PostPage({ post }: PostPageProps) {
    return <Post post={post} />;
}

export const getStaticPaths = (async () => {
    const sortedPosts = posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const recentPosts = sortedPosts.slice(0, 5);
    const paths = recentPosts.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
    const { slug } = context.params as { slug: string };
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
        },
    };
}) satisfies GetStaticProps;