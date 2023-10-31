import React, { useState, useEffect } from 'react'


const get_category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const url = 'http://10.0.1.220:3333/categories/index'
        const request = 'GET'
        console.log(get_api(url, request))
        console.log(category)
    }, [])
    
    return (
        <>
            <div>
                <ul className="flex justify-around">
                    {category.map(cat =>
                        <li key={cat.cate_id} className = "">
                            <img src={`${process.env.PUBLIC_URL}/src/icon/jpg/${cat.cate_photo}`} alt={cat.cate_name} />
                            <span>{cat.cate_name}</span>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default get_category