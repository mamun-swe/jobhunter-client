import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import SingleSelect from '../../components/select/Single'

const Index = () => {
    const history = useHistory()
    const { register, handleSubmit } = useForm()
    const [category, setCategory] = useState({
        value: null,
        error: false,
        options: [
            { label: 'IT Executive', value: 'IT Executive' },
            { label: 'Software Development', value: 'Software Development' },
            { label: 'Web Development', value: 'Web Development' },
            { label: 'Android Development', value: 'Android Development' },
        ]
    })

    // Submit form
    const onSubmit = data => {
        if (!category.value) return setCategory({ ...category, error: true })
        history.push(`/search-results?title=${data.title.replace(/ /g, "+")}&country=${category.value.replace(/ /g, "+")}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="search-box">
                <div className="input-form">
                    <input
                        type="text"
                        placeholder="Job Tittle or keyword"
                        {...register("title", { required: true })}
                    />
                </div>
                <div className="select-form">
                    <div className="select-itms">
                        <SingleSelect
                            error={category.error}
                            placeholder={'category'}
                            options={category.options}
                            value={(event) => setCategory({ ...category, value: event.value, error: false })}
                        />
                    </div>
                </div>
                <div className="search-form mt-4 mt-md-0">
                    <button
                        type="submit"
                        className="btn shadow-none btn-block px-0"
                        style={{ height: 70 }}
                    >Find Job</button>
                </div>
            </form>
        </div>
    )
}

export default Index;