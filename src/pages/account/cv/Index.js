import React, {
    useEffect,
    useState,
    useCallback
} from 'react'
import { PDFReader } from 'reactjs-pdf-reader';
import { toast } from 'react-toastify'
import Requests from '../../../utils/Requests/Index'


const Index = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Fetch data
    const fetchData = useCallback(async () => {
        const response = await Requests.Account.Profile(header)
        if (response) setUser(response.user)
    }, [header])

    useEffect(() => {
        fetchData()
    }, [header, fetchData])

    // Handle image
    const handleImage = async (event) => {
        const file = event.target.files[0]
        if (file) {
            setLoading(true)
            let formData = new FormData()
            formData.append('cv', file)
            const response = await Requests.Account.UploadCv(formData, header)

            if (response.status === true) {
                toast.success(response.message)
            }
            setLoading(false)
        }
    }

    return (
        <div className="card">
            <div className="card-body" style={{overflow: 'hidden'}}>
                {user && user.cv ?
                    <div style={{
                        overflow: 'scroll',
                        height: 600
                    }}>
                        <PDFReader url={user.cv} />
                    </div>
                    :
                    <div className="text-center">
                        <p>Loading ...</p>
                    </div>
                }


                {/* Image upload Container */}
                <div className="img-container text-center pt-5">
                    {isLoading ? <p>Uploading ...</p> :
                        <div className="image">
                            <input
                                type="file"
                                accept="pdf/*"
                                className="upload"
                                onChange={handleImage}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Index;


