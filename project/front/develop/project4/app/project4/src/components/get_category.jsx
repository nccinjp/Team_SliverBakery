import React, { useState, useEffect } from 'react'


const get_category = () => {
    const [category, setCategory] = useState([]);
    const flag = false
    const [meats, setMeats] = useState([]);

    useEffect(() => {
        fetch('http://10.0.1.220:3000/categories/index', {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            setCategory(data)
            if(flag) {
                fetch('http://10.0.1.220:3000/meats/index', {method: "GET"})
                .then((response) => response.json())
                .then((data) => {
                    setMeats(data)
                    // console.log(data)
                })
            } else {
                console.log("no promise")
            }
        })
    }, [])
    console.log(meats);
    console.log(category)
    
    return (
        <>
            <div>practice</div>
        </>
    )
}

export default get_category