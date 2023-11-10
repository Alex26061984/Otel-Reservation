import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Client from './Client';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';

function Add() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [room, setRoom] = useState('');
    const [price, setPrice] = useState('');
    let history = useNavigate();

    const handleAdd = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        let cname = name, csurname = surname, croom = room, cprice = price;
        Client.push({ id: uniqueId, Name: cname, Surname: csurname, Room: croom, Price: cprice });
        history('/');

    }

    return (
        <div>

            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>

                <Form.Group className="mb-3" controls="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controls="formSurname">
                    <Form.Control type="text" placeholder="Enter Surname" required onChange={(e) => setSurname(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controls="formRoom">
                    <Form.Control type="number" placeholder="Enter Room Number" required onChange={(e) => setRoom(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controls="formPrice">
                    <Form.Control type="text" placeholder="Enter Price" required onChange={(e) => setPrice(e.target.value)}></Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleAdd(e)} type="submit">Save</Button>
            </Form>

        </div>
    );
}

export default Add;
