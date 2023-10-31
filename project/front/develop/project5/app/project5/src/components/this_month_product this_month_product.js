import React from 'react'
import { useEffect, useState } from 'react';


const json_get = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('http://10.0.1.220:3000/users/show?id=1', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
    }, [])

    return (
      <div>
        
      </div>
    )
}

export default json_get