const getUsers = async () => {
  const res = await fetch("http://localhost:5000/users")
  return res.json()
}

export default async function Users() {
  const users = await getUsers()

  return (
    <div className="mx-20">
      <h2 className="page-title">This is Page Users</h2>
      <div>
        {users.map((user: any) => {
          return (
            <div>
              <div className="text-start flex items-start justify-start gap-x-2  overflow-y-hidden  my-4">
                <strong className="text-rose-500">{user.id}.</strong>
                <p className="text-neutral-500"> {user.name}</p>
              </div>

              <span className="text-blue-400">email: {user.email}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
