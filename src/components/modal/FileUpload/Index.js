
import React, { useState } from 'react'
import './style.scss'
import Modal from 'react-bootstrap/Modal'
import { Plus, X } from 'react-feather'

export const FileUpload = (props) => {
    const [image, setImage] = useState({ value: null, preview: null })

    // Handle image
    const handleImage = event => {
        const file = event.target.files[0]
        if (file) setImage({ value: file, preview: URL.createObjectURL(file) })
    }

    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.onHide}
                dialogClassName="custom-file-upload-modal"
            >
                <Modal.Header className="border-0">
                    <h6 className="font-weight-bold mb-0">Change Picture</h6>
                </Modal.Header>
                <Modal.Body className="p-3">
                    {image.value && image.preview ?

                        // File preview container
                        <div className="file-preview-container">
                            <div className="file-preview border">
                                <img src={image.preview} className="img-fluid m-auto" alt="..." />
                                <button
                                    type="button"
                                    className="btn btn__close"
                                    onClick={() => setImage({ value: null, preview: null })}
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="text-right pt-3">
                                <button
                                    type="button"
                                    className="btn__upload"
                                    disabled={props.loading}
                                    onClick={() => props.upload(image.value)}
                                >{props.loading ? "Uploading ..." : "Upload"}</button>
                            </div>
                        </div>
                        :

                        // File select container
                        <div className="file-selector-container text-center">
                            <div>
                                <input
                                    type="file"
                                    accept=".jpg, .png, .jpeg"
                                    className="upload"
                                    onChange={handleImage}
                                />
                                <div className="icon-container text-center border rounded p-4 w-50 m-auto">
                                    <Plus size={22} />
                                </div>
                                <div className="mt-3">
                                    <p>Select .jpg, .png, .jpeg type file.</p>
                                    <p>To use your profile picture.</p>
                                </div>
                            </div>
                        </div>
                    }
                </Modal.Body>
            </Modal>
        </div>
    )
}