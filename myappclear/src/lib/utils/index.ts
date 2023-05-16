type metadatatype = {
    metadata:{
        date:Date
    }
}
type BlogEntry = [string, () => Promise<metadatatype>];
type BlogEntriesArray = BlogEntry[];

export const fetchMarkdownPosts = async () => {

    const allPostFiles = import.meta.glob<metadatatype>('/src/routes/blog/*.md')
    
    
    const iterablePostFiles:BlogEntriesArray = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
          const { metadata } = await resolver()
          const postPath = path.slice(11, -3)
    
          return {
            meta: metadata,
            path: postPath,
          }
        })
      )

      return allPosts
}