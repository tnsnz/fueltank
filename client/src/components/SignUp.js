import css from '../css/Main.module.css'
import Header from "./header/header"
import React, {useState} from 'react';
import {useForm} from "react-hook-form";

export default function Main() {
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div>
            <div className={css.container_shadow}>
                <div className={css.container}>
                    <Header/>
                </div>
            </div>
        </div>
    )
};