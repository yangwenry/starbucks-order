import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BeveragePage() {

    const [Coffees, setCoffees] = useState([])

    useEffect(() => {
        axios.get('/api/coffee/list')
            .then(response => {

                console.log(response.data)

                if(response.data.success) {
                    const coffees = response.data.coffees
                    setCoffees(coffees)
                } else {
                    alert('데이터를 불러오는데 실패했습니다.')
                }
                
            })
    }, [])

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h3>음료 페이지</h3>
            {
                Coffees && Coffees.map((coffee, index) => (
                    <div>
                        <h4>{coffee.name}</h4>
                        <img src={coffee.image} />
                    </div>
                ))
            }
        </div>
    )
}

export default BeveragePage
