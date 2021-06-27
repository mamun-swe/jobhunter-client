import React from 'react'
import './style.scss'
import { Icon } from 'react-icons-kit'
import Modal from 'react-bootstrap/Modal'
import { ic_clear } from 'react-icons-kit/md'

const Apply = (props) => {
    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.onHide}
                dialogClassName="custom-delete-modal"
            >
                <Modal.Header>
                    <div className="d-flex w-100">
                        <div><h6 className="mb-0">Are you sure ?</h6></div>
                        <div className="ml-auto">
                            <button
                                type="button"
                                disabled={props.loading}
                                className="btn btn-sm btn-light shadow-none rounded-circle p-1"
                                onClick={props.onHide}
                            >
                                <Icon icon={ic_clear} size={25} />
                            </button>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <p className="mb-4">Apply with your profile.</p>
                    <div>
                        <button
                            type="button"
                            className="btn shadow-none"
                            disabled={props.loading}
                            onClick={props.submit}
                        >{props.loading ? 'Applying ...' : 'Yes'}</button>
                        <button
                            type="button"
                            className="btn shadow-none ml-2"
                            disabled={props.loading}
                            onClick={props.onHide}
                        >No</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Apply;