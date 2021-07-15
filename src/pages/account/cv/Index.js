import React, {
    useEffect,
    useState,
    useCallback
} from 'react'
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
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
        <div className="card border-0 shadow-sm">
            <div className="card-body">
                {user && user.cv ?
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                        <Viewer fileUrl={user.cv} />
                    </Worker>
                    : null}


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


