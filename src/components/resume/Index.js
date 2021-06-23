import React from 'react'
import { Images } from '../../utils/Images'

const Index = () => {
    return (
        <div>
            <div className="online-cv cv-bg section-overly pt-90 pb-120" style={{ backgroundImage: `url(${Images.cvBg})` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="cv-caption text-center">
                                <p className="pera1">FEATURED TOURS Packages</p>
                                <p className="pera2"> Make a Difference with Your Online Resume!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;