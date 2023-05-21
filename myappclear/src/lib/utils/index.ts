export type MarkDownType = {
    metadata:{
        title:string
        blurb:string
        date:Date
    },
    path: string;
}
type BlogEntry = [string, () => Promise<MarkDownType>];
type BlogEntriesArray = BlogEntry[];

export const fetchMarkdownPosts = async () => {

    const allPostFiles = import.meta.glob<MarkDownType>('/src/routes/blog/*.md')

    
    const iterablePostFiles:BlogEntriesArray = Object.entries(allPostFiles)
    
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = path.slice(11, -3)
          return {
            metadata,
            path: postPath,
          }
        })
      )

      return allPosts
}