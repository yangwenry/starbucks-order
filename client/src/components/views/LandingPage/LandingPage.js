import React from 'react'
import { withRouter } from 'react-router-dom'

function LandingPage() {
    return (
        <div id="container">
            <div id="topWrap">
                <h2>메인 페이지입니다.</h2>

                <div className="main-visual_wrap">
                    <div className="main-visual_inner">
                        <div className="main-visual_slogan" style={{opacity: 1}}>
                            <img src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_summer3_slogan.png" alt="FOUND HAPPY PLACE" className="pc-slogan" />
                            <img src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_m_summer3_slogan.png" alt="FOUND HAPPY PLACE" className="m-slogan" />
                        </div>

                        <div className="main-visual_set">
                            <div className="set_common set_01" style={{opacity: 1}}>
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_summer3_blended.png" alt="트윙클 스타 핑크 블렌디드" className="pc-drink" />
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_m_summer3_blended.png" alt="트윙클 스타 핑크 블렌디드" className="m-drink" />
                            </div>    
                            <div className="set_common set_02" style={{opacity: 1}}>
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_summer3_coldbrew.png" alt="아이스크림 블렌딩 콜드 브루" className="pc-drink" />
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_m_summer3_coldbrew.png" alt="아이스크림 블렌딩 콜드 브루" className="m-drink" />
                            </div>                                                    
                            <div className="set_common set_03" style={{opacity: 1}}>
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_summer3_tea.png" alt="유자&amp;유스베리 티" className="pc-drink" />
                                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_m_summer3_tea.png" alt="유자&amp;유스베리 티" className="m-drink" />
                            </div>
                        </div>                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(LandingPage)
