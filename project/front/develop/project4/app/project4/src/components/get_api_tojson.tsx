import React from 'react'

const get_api_tojson = () => {
  const asyncAwaitFunc = async() => {
    await fetch('http://10.0.1.220:3000/categories/index', {method: 'GET'})
    .then((res) => {
        console.log(res.ok)
        console.log(res.json())
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
  }

  return asyncAwaitFunc()
}

export default get_api_tojson