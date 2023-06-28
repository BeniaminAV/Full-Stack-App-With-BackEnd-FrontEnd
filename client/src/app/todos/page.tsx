const getTodo = async () => {
  const res = await fetch("http://localhost:5000/todos")
  return res.json()
}

export default async function Todos() {
  const todos = await getTodo()

  return (
    <div className="mx-20">
      <h2 className="page-title">This is Todo Page</h2>
      <div>
        {todos.map((todo: any) => {
          return (
            <div className="text-start flex items-start justify-start gap-x-2  overflow-y-hidden  my-4">
              <strong className="text-rose-500">{todo.id}.</strong>
              <p className="text-neutral-500"> {todo.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
