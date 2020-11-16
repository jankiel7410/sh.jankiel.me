import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>sh.jankiel.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">
          Welcome to <a href="https://nextjs.org">sh.jankiel.me!</a>
        </h1>
        <p className="">Paste an URL below to get a shortened version of it.</p>
        <form className="">
          <label for="url">
            <input type="url" name="url" value="" />
          </label>
        </form>
      </main>
    </div>
  )
}
