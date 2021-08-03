import React from 'react'
import { withRouter } from 'react-router-dom'

function LandingPage() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2>메인 페이지입니다.</h2>
        </div>
    )
}

export default withRouter(LandingPage)
