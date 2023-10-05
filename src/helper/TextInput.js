"use client"
import React, { useState } from 'react'
import { Field, ErrorMessage, useField } from 'formik'


export const FieldInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Input err={meta.touched && meta.error} {...field} {...props} />
            {meta.touched && meta.error && <Error>{t(meta.error)}</Error>}
        </>
    );
}

export const MyTextField = ({ placeholder, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div >
            <input placeholder={placeholder} {...field}/>
            {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
        </div>
    );
};
export const MyTextForgot = ({ placeholder, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div >
            <input  className placeholder={placeholder} {...field}/>
            {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
        </div>
    );
};


export const FieldPassword = ({ label, placeholder, value, onChange, ...props }) => {
    const { field, meta } = Field(props);
    const [visible, setVisible] = useState(false)
    return (
        <div>

            <div className='icon-pass'>
                <input

                    id={label}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    err={meta.touched && meta.error}
                    // isIcon={src}
                    {...field}
                    {...props}
                    type={visible ? "text" : "password"}
                />
                <img
                    className="eye"
                    src={visible ? icons.openEye : icons.closeEye}
                    alt="close_eye"
                    width=""
                    height=""
                    onClick={() => setVisible(!visible)}
                />
            </div>
            {meta.touched && meta.error && <div className='error'>{t(meta.error)}</div>}
        </div>
    )
}
