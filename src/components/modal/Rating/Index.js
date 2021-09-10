import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Icon } from 'react-icons-kit'
import { Form } from 'react-bootstrap'
import { ic_clear } from 'react-icons-kit/md'
import { star } from 'react-icons-kit/feather/star'
import Requests from '../../../utils/Requests/Index'

export const RatingModal = (props) => {
    const [checked, setChecked] = useState(5)
    const [isLoadig, setLoading] = useState(false)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    const items = [
        {
            label:
                <>
                    <Icon className="text-muted" icon={star} size={14} />
                    <Icon className="text-muted" icon={star} size={14} />
                    <Icon className="text-muted" icon={star} size={14} />
                    <Icon className="text-muted" icon={star} size={14} />
                    <Icon className="text-muted" icon={star} size={14} />
                </>,
            value: 5
        },
        {
            label:
                <>
                    <Icon className="text-muted" icon={star} size={14} />
                    <Icon className="text-muted" icon={star} size={14} />
                    <Icon className="text-muted" icon={star} size={14} />
                    <Icon className="text-muted" icon={star} size={14} />
                </>,
            value: 4
        },
        {
            label:
                <>
                    <Icon className="text-muted" icon={star} size={14} />
                    <Icon className="text-muted" icon={star} size={14} />
                    <Icon className="text-muted" icon={star} size={14} />
                </>
            , value: 3
        },
        {
            label:
                <>
                    <Icon className="text-muted" icon={star} size={14} />
                    <Icon className="text-muted" icon={star} size={14} />
                </>
            , value: 2
        },
        {
            label:
                <>
                    <Icon className="text-muted" icon={star} size={14} />
                </>
            , value: 1
        }
    ]

    // handle change
    const handleChange = value => setChecked(value)

    // handle submit
    const handleSubmit = async () => {
        const formData = {
            jobId: props.postId,
            rating: checked
        }

        setLoading(true)
        await Requests.Account.Rating(formData, header)
        props.refetch()
        setLoading(false)
    }

    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.onHide}
                dialogClassName="custom-delete-modal"
            >
                <Modal.Header>
                    <div className="d-flex w-100">
                        <div><h6 className="mt-2 mb-0"><b>Give your rating.</b></h6></div>
                        <div className="ml-auto">
                            <button
                                type="button"
                                className="btn__muted ml-auto shadow-none rounded-circle p-1"
                                onClick={props.onHide}
                            >
                                <Icon icon={ic_clear} size={25} />
                            </button>
                        </div>
                    </div>

                </Modal.Header>
                <Modal.Body className="p-4">
                    {items.map((item, i) => (
                        <div key={i} className="font-sm mb-2">
                            <Form.Check
                                type='checkbox'
                                id={"Rating__checkbox" + i}
                                value={item}
                                label={item.label}
                                checked={checked === item.value}
                                onChange={() => handleChange(item.value)}
                            />
                        </div>
                    ))}

                    <div className="text-right">
                        <button
                            className="btn__muted"
                            disabled={isLoadig}
                            onClick={handleSubmit}
                        >{isLoadig ? "Loading ..." : "Submit"}</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}