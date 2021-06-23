import React from 'react'

import { Images } from '../../utils/Images'
import SearchForm from '../search/Index'

const Index = () => {
    return (
        <div className="slider-area">
            <div className="slider-active">
                <div className="single-slider slider-height d-flex align-items-center" style={{ backgroundImage: `url(${Images.SliderBg})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-9 col-md-10">
                                <div className="hero__caption">
                                    <h1>Find the most exciting startup jobs</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;