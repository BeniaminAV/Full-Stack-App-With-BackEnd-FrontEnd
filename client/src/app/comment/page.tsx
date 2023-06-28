const getComments = async () => {
  const res = await fetch("http://localhost:5000/comments")
  return res.json()
}

export default async function Comment() {
  const comments = await getComments()

  return (
    <div className="mx-20">
      <h2 className="page-title">This is Comment Page</h2>
      <div>
        {comments.map((comment: any) => {
          return (
            <div className="text-start my-4">
              <div className=" flex items-start justify-start gap-x-2">
                <strong className="text-rose-500">{comment.id}.</strong>
                <p>{comment.email}</p>
              </div>
              <p className="text-neutral-500">{comment.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
