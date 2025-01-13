export type PostType = { userId: Number; id: number; title: string; body: string; };

type PostComponentProps = {post: PostType | null};

const Post: React.FC<PostComponentProps> = ({post}) => {
    return (
        <>
        <h3>{post && post.title}</h3>
        <p>{post && post.body}</p>
        </>
    );
};

export default Post;