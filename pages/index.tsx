import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components/index'

const posts = [
  {
    title: 'React Testing',
    excerpt: 'Learn React testing',
  },
  {
    title: 'React with tailwind',
    excerpt: 'Learn React testing',
  },
]

const Home: NextPage = () => {
  return (
    <div className=" container mx-auto mb-8 px-10 ">
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
