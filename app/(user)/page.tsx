import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`

async function HomePage() {
  if (previewData()){
    // TODO - add <PreviewSuspense> wrapper
    return <div>Preview Mode</div>
  } 

  const posts = await client.fetch(query)
  console.log(posts)
  return (
  <div>Not in preview mode</div>
  )
}

export default HomePage