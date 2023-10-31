import React, { useState } from 'react'

function get_api(url, request)　{
    const [items, setItems] = useState([])
    fetch(url, {method: request})
    .then(res => res.json())
    .then(data => {
        setItems(data)
    })
    return items
}

export default get_api