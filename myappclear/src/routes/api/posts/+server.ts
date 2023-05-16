import { fetchMarkdownPosts } from "$lib/utils";
import { json } from "@sveltejs/kit";

type IAllPosts = {
  meta: {
    date: Date;
  };
  path: string;
}[];

export const GET = async () => {
  const allPosts: IAllPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return Number(new Date(a.meta.date)) - Number(new Date(b.meta.date));
  });

  return json(sortedPosts);
};
