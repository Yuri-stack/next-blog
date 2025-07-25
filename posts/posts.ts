type AuthorType = {
    name: string;
    avatar: string;
}

type PostsType = {
    id: number;
    title: string;
    slug: string;
    description: string;
    date: string | number;
    image: string;
    author: AuthorType
}

export const posts: PostsType[] = [{
    id: 1,
    title: "Transformando seu negócio em uma loja virtual",
    slug: "primeiro-post",
    description: "Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você.",
    date: "2024/12/20 10:20:00",
    image: "/assets/primeiro-post.png",
    author: {
        name: "Aspen Dokidis",
        avatar: "/customer-01.png"
    }
},
{
    id: 2,
    title: "Transformando seu negócio em uma loja virtual",
    slug: "segundo-post",
    description: "Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você.",
    date: "2024 / 12 / 20 10: 20:00",
    image: "/assets/primeiro-post.png",
    author: {
        name: "Aspen Dokidis",
        avatar: "/customer-01.png"
    },
}]

