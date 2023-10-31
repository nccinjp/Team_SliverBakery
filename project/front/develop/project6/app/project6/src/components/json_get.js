import React from 'react'
import { useEffect, useState } from 'react';


const json_get = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('http://10.0.1.220:3000/users/index', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
    }, [])

    return (
      <div>
        {
          posts.map(post => <><h1><strong>{post.name}</strong></h1><p>{post.name}のimg_urlは{post.profile_image_url}です</p></>)
        }
        {posts.name}
      </div>
    )
}

export default json_get