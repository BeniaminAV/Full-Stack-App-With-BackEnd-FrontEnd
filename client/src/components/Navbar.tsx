"use client"

import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <div className="mx-auto flex items-center justify-center mt-20 gap-x-5 uppercase text-3xl font-bold text-yellow-500">
      <Link href={"/"}>Home</Link>
      <Link href={"/post"}>Post</Link>
      <Link href={"/comment"}>Comment</Link>
      <Link href={"/albums"}>Albums</Link>
      <Link href={"/photos"}>Photos</Link>
      <Link href={"/todos"}>Todos</Link>
      <Link href={"/users"}>Users</Link>
    </div>
  )
}

export default Navbar
