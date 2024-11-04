import React from 'react'

export default async function TranslatedLyrics() {
    let data = await fetch('https://api.vercel.app/blog')
    let posts = await data.json()
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }