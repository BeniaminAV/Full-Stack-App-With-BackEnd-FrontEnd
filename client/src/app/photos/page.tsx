"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "./components/Button"

interface PhotoProps {
  url: string
}

const getPhoto = async (): Promise<PhotoProps> => {
  try {
    const res = await fetch("http://localhost:5000/photo", {
      cache: "no-store",
    })
    const data: PhotoProps[] = await res.json()
    const randomPhoto = data[Math.floor(Math.random() * data.length)]
    return randomPhoto
  } catch (error) {
    console.error("Something went wrong", error)
    throw new Error()
  }
}

export default function Photo() {
  const [photo, setPhoto] = useState<PhotoProps | null>(null)

  const fetchPhoto = async () => {
    try {
      const randomPhoto = await getPhoto()
      setPhoto(randomPhoto)
    } catch (error) {
      console.error("Something went wrong", error)
    }
  }

  useEffect(() => {
    fetchPhoto()
  }, [])

  const handleClickChange = () => {
    fetchPhoto()
  }

  return (
    <div>
      <h2 className="page-title">This is Photo page</h2>
      <div>
        {photo && (
          <div className="flex items-center justify-center">
            <Image src={photo.url} alt="img" width={300} height={300} />
          </div>
        )}
      </div>
      <div className="flex items-center justify-center py-10">
        <Button label="Change Photo" onClick={handleClickChange} />
      </div>
    </div>
  )
}
