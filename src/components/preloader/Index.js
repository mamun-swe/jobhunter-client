import React from 'react'
import { Images } from '../../utils/Images'

const Index = () => {
    return (
        <div>
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader-circle"></div>
                    <div className="preloader-img pere-text">
                        <img src={Images.Logo} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index