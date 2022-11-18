import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
export default function CustomerRegistration(props) {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Mobile No.</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Email</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">DOB</label>
                        <input type="date" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Gender</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" name='gender' id="gender"/>
                            <label className="form-check-label" for="flexCheckChecked">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" name='gender' id="gender"/>
                            <label className="form-check-label" for="flexCheckChecked">Female</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" name='gender' id="gender"/>
                            <label className="form-check-label" for="flexCheckChecked">Other</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Work/Occupation</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Company</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Doctor Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Dr.Mobile</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Emergency Contact Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Emergency Contact No.</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Address</label>
                        <input type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Pincode</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Do you have any private insurance ?</label>
                        <input type="checkbox" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Insurance Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">How did you find out our GYM</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">if you refered ,who by ?</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Workout Type</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Workout Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Membership Card</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Card</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Time Slot</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Time</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Advance Payment</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Payment Type</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Payment Type</option>
                            <option value="1">UPI</option>
                            <option value="2">Cash</option>
                            <option value="3">Cheque</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Advance Payment</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" />
                    </div>
                    


                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
