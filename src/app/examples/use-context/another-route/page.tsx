'use client';
import AnotherComponent from './component/AnotherComponent';
import PostContext from '../store/post';
import { Post } from '../store/post';
import Component2 from './component/Component2';
const postData: Post = {
  userId: 1,
  id: 1,
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

const AnotherRoutePage = () => {
  return (
    <PostContext.Provider value={postData}>
      <div>anotherroutepage</div>;
      <AnotherComponent />
      <Component2 />
    </PostContext.Provider>
  );
};

export default AnotherRoutePage;
