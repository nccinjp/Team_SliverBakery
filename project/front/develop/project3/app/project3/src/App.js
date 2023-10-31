// npm install方法 : docker-compose run --rm node sh -c "npm install bootstrap@5"
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  }, [])
  return (
    <div>
      <ul>
        {
          posts.map(post => <li key={}>{}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
