import React, {useState} from "react";
import "./SongForm.css";
import {Form, Col, Button, Row} from 'react-bootstrap';

const SongForm = (props) => {

    // state for the form 
    const [formData, setFormData] = useState(props.song);   
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData);
        props.history.push('/');
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

  return (
      <div className="song-form">
        <h1>{props.label}</h1>  
        <Form onSubmit={handleSubmit} className="add-song-form">
            <Row>
            <Col sm>
            <Form.Group controlId="">
                <Form.Label>TITLE</Form.Label>
                <Form.Control 
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col sm={{ offset: 1 }} >
            <Form.Group controlId="">
                <Form.Label>ARTIST</Form.Label>
                <Form.Control 
                    type="text"
                    name="artist"
                    value={formData.artist}
                    onChange={handleChange}
                />
            </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col sm={{ offset: 1 }} >
            <Form.Group controlId="">
                <Form.Label>TIME</Form.Label>
                <Form.Control 
                    type="text"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                />
            </Form.Group>
            </Col>
            </Row>

            <Row>
            <Col sm={{ offset: 1 }} >
            <Button 
            variant="primary"
            type="submit"
             >
            Save
            </Button>
            </Col>
            </Row>
        </Form>
    </div>
    )
}

export default SongForm;