import React from 'react'
import { getSinglePost } from '../../pages/api/ghostCMS/index'

export const TestContents = ({ data }) => {
  const ShowSinglePost = async (id) => {
    const post = await getSinglePost(id)
    console.log(post)
  }
  const idPost = data.AllBlogs.map((post) => post.id)
  return (
    <div>
      <ul>
        {idPost.map((post, index) => {
          return <li key={index}>{post}</li>
        })}
      </ul>
      <button onClick={() => ShowSinglePost('609bb12f46f5b30001c1e4f8')}>submit</button>
    </div>
  )
}
