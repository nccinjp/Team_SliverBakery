import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const menu_detail = () => {
    const {id} = useParams()
    // お肉お肉の詳細情報の取得
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://10.0.1.220:3000/goods/show?id=${id}`, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }, [])

    // お肉情報取得
    const [meat, setMeat] = useState([])
    useEffect(() => {
        fetch(`http://10.0.1.220:3000/meats/index`, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setMeat(data)
        })
    }, [])
    const cons = (id) => {
        console.log(id)
    }

    return (
        <div>
            {products.map(product =>
                <div key={product.id}>
                    <img src={`${process.env.PUBLIC_URL}/src2/hotpot/${product.g_photo}`} alt={product.g_name} />
                    <span>{product.g_name}</span><br />
                    <small>￥ {product.g_price}</small><br />
                </div>
            )}
            <span>お肉の種類を鶏肉か豚肉より一種類お選びください(追加料金はありません)</span>
            {meat.map(m =>
                <div key={m.id}>
                    <button type="submit" value={m.id} name={m.m_name}>
                        <img src={`${process.env.PUBLIC_URL}/src/icon/png/${m.m_photo}`} alt={m.m_name} />
                        <span>{m.m_name}</span>
                    </button>
                </div>
            )}
            <span>辛さをお選びください(追加料金はありません)</span>
        </div>
    )
}

export default menu_detail