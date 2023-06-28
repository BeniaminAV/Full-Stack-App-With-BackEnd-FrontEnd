const getPosts = async () => {
  const res = await fetch("http://localhost:5000/posts")
  return res.json()
}

export default async function Post() {
  const posts = await getPosts()

  return (
    <div className="mx-20 text-center font-bold">
      <h2 className="page-title">This is Post Page</h2>
      <div>
        {posts.map((post: any) => {
          return (
            <div className="text-start flex items-start justify-start gap-x-2  overflow-y-hidden  my-4">
              <strong className="text-rose-500">{post.id}.</strong>
              <p className="text-neutral-500"> {post.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
