import Image from "next/image"

export default function Home() {
  return (
    <main className="mx-20">
      <h2 className="page-title">
        BACK-END <strong className="text-blue-400">(server)</strong> + FRONT-END{" "}
        <strong className="text-green-400">(client)</strong>
      </h2>
      <p className="py-10 text-neutral-400">
        This application is built using both back-end and front-end
        technologies. On the back-end side, we have utilized Node.js with
        TypeScript, Nodemon, and Express. As for the front-end, it is developed
        using Next.js and React. The purpose of this application is to create a
        back-end server that provides API information, which is then connected
        to the client-side.
      </p>
    </main>
  )
}
