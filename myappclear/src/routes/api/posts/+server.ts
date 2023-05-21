import { fetchMarkdownPosts, type MarkDownType } from "$lib/utils";
import { json } from "@sveltejs/kit";



type MarkdDownList = MarkDownType[]

export const GET = async () => {
  const allPosts: MarkdDownList = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return Number(new Date(a.metadata.date)) - Number(new Date(b.metadata.date));
  });

  return json(sortedPosts);
};
