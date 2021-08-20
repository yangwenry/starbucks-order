import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuItem from './Sections/MenuItem';
import { Row } from 'antd'
import { withRouter } from 'react-router-dom'

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

        <div id="wrap">
            <div className="sub_tit_wrap">
                <h3>음료 페이지</h3>
            </div>    
            <div className="content">
                <div className="product_list">
                    <Row gutter={[16, 16]}>
                    {
                        Coffees && Coffees.map((coffee, index) => (
                            <MenuItem key={index} coffee={coffee} />
                        ))
                    }                    
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default withRouter(BeveragePage)
