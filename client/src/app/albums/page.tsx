const getAlbum = async () => {
  const res = await fetch("http://localhost:5000/albums")
  return res.json()
}

export default async function Albums() {
  const albums = await getAlbum()
  return (
    <div className="mx-20">
      <h2 className="page-title">This is Album Page</h2>
      <div>
        {albums.map((album: any) => {
          return (
            <div className="text-start my-4 flex items-start justify-start gap-x-2">
              <strong className="text-rose-500">{album.id}.</strong>
              <p className="text-neutral-500">{album.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
