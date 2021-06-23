import React from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../utils/Images'

const Index = () => {
    const styles = {
        container: {
            width: '100%',
            height: '100vh'
        },
        img: {
            maxHidth: 400,
            maxHeight: 400
        }
    }
    return (
        <div className="four-o-four" style={styles.container}>
            <div className="flex-center flex-column text-center">
                <img
                    style={styles.img}
                    src={Images.FourOFour}
                    className="img-fluid"
                    alt="..." />

                <p>Opps! Page not found. What are you looking for ?</p>

                <Link
                    to="/"
                    type="button"
                    className="btn shadow-none"
                >Go Back</Link>
            </div>
        </div>
    )
}

export default Index;