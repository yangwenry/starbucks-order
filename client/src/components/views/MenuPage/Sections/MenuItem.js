import React from 'react';
import { Col, Row, List, Card, Typography } from 'antd';
import { withRouter } from 'react-router-dom';

const { Text } = Typography;

function MenuItem({coffee}) {
    return (
        <>
            <Col className="gutter-row" span={6} align="center">
                <div >
                    <div> 
                        <a href={`/detail/${coffee._id}`}><img src={coffee.image} alt={coffee.name}/></a>
                    </div>
                    <div>
                        <Text>{coffee.name}</Text>
                    </div>
                </div>
            </Col>            
        </>
    )
}

export default withRouter(MenuItem);
