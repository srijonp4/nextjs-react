import { usePostContext } from '../../store/post';

const Component2 = () => {
  const post = usePostContext();
  return (
    <div>
      <h1>component2</h1>
      <div>{post.id}</div>
      <div>{post.userId}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  );
};

export default Component2;
