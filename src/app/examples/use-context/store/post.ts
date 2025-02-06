'use client';
import { createContext, useContext } from 'react';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostContext = createContext<Post | undefined>(undefined);

export const usePostContext = () => {
  const post = useContext(PostContext);
  console.log(post);
  if (post === undefined) {
    throw new Error(
      'warp the child in PostContext.Provider first and then provide a valid value other than undefined'
    );
  }
  return post;
};

export default PostContext;
