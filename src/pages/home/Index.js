import React, { useEffect, useState } from 'react'

import Header from '../../components/header/Index'
import Slider from '../../components/slider/Index'
import Categories from '../../components/categories/Index'
import FeaturedJob from '../../components/featuredjob/Index'
import HowWork from '../../components/howWork/Index'
import PostJob from '../../components/postJob/Index'
import Resume from '../../components/resume/Index'
import Footer from '../../components/footer/Index'
import Preloader from '../../components/preloader/Index'

const Index = () => {
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    if (isLoading) return <Preloader />
    return (
        <div>
            <Header />
            <main>
                <Slider />
                <Categories />
                <Resume />
                <FeaturedJob />
                <HowWork />
                <PostJob />
            </main>
            <Footer />
        </div>
    )
}

export default Index;