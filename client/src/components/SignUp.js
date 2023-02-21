import css from '../css/Main.module.css'
import Header from "./header/header"
import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container} from "react-bootstrap";


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
                    <Container className="panel">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Col sm>
                                    <Form.Control placeholder="UserID" {...register('email')}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Col sm>
                                    <Form.Control type="password" placeholder="Password" {...register('password')}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Col sm>
                                    <Form.Control type="password" placeholder="Password Confirm" {...register('password_confirm')}/>
                                </Col>
                            </Form.Group>

                            <br/>

                            <div className="d-grid gap-1">
                                <Button variant="secondary" type="submit">
                                    Sign In
                                </Button>
                            </div>
                        </Form>
                    </Container>
                </div>
            </div>
        </div>
    )
};