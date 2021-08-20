import React from 'react';
import { PageHeader, Button, Descriptions, Table, List, Typography } from 'antd';

const { Column, ColumnGroup } = Table;
const { Text, Title } = Typography;

function MenuDetailDescription({coffee}) {
    return (
        <>
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={coffee.name}
                subTitle={coffee.eng_name}
            >
                <Descriptions size="small" column={1}>
                    <Descriptions.Item>{coffee.description}</Descriptions.Item>
                    <Descriptions.Item>
                        <Title level={5}>제품영양정보</Title>
                        <Title level={5} style={{ textAlign: "right", width: "80%"}}>{coffee.calories}</Title>                        
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </>
    )
}

export default MenuDetailDescription
