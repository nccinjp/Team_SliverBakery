import React, { useEffect, useMemo, useState } from 'react'
import { ReactComponent as Logo } from '../svg/cart.svg';

const get_good = () => {
    const [good, setGood] = useState([]);

    useEffect(() => {
        fetch('http://10.0.1.220:3000/goods/index', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setGood(data)
        })
    }, [])
    return (
        <div>
            <ul className='flex justify-around'>
                {good.map(g =>
                    <div key={g.g_id}>
                        <li>
                            <a href={`/menu/${g.g_id}`}>
                                <img src={`${process.env.PUBLIC_URL}/src2/hotpot/${g.g_photo}`} alt={g.g_name} />
                                <span>{g.g_name}</span><br />
                                <small>{g.g_price}</small>
                            </a>
                            <span><Logo />追加</span>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default get_good