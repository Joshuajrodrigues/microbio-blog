


export async function load({ params }) {
    const post = await import(`../${params.slug}.md`)
    const { title, date, image_1 } = post.metadata
    const content = post.default
    return {
        content,
        title,
        date,
        image_1
      }

    
}