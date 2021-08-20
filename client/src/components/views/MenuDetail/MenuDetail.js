import React, { useEffect, useState } from 'react';
import { Row, Col, Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import MenuDetailDescription from './Sections/MenuDetailDescription'

function MenuDetail(props) {

    let coffeeId = props.match.params.coffeeId;

    const [Coffee, setCoffee] = useState(null)

    useEffect(() => {

        const url = "/api/coffee/" + coffeeId;
        axios.get(url)
            .then(response => {

                console.log(response.data)

                if(response.data.success) {
                    const coffee = response.data.coffee
                    setCoffee(coffee)
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

            <div className="content" style={{ width: '70%', alignItems: 'center'}}>
            { Coffee && 
                <Row gutter={16}>
                    <Col xl={12}>
                        <img src={Coffee.image} alt={Coffee.name} title={Coffee.name}/>
                    </Col>
                    <Col xl={12}>
                        <MenuDetailDescription coffee={Coffee} />
                    </Col>                    
                </Row>        
            }
            </div>
        </div>
    )
};

export default withRouter(MenuDetail);
