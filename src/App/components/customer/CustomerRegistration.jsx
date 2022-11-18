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
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Mobile No.</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Mobile No."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">DOB</label>
                        <input type="date" className="form-control" id="exampleInputPassword1" placeholder='DOB'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Gender</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" name='gender' id="gender"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" name='gender' id="gender"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">Female</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" name='gender' id="gender"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">Other</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Work/Occupation</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="work" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Company</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Company"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Doctor Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Doctor name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Dr.Mobile</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Dr. Mobile"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Emergency Contact Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Emergency name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Emergency Contact No.</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Emergency Contact"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <input type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Address"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Pincode</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Pincode"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Do you have any private insurance ?</label>
                        <input type="checkbox" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Insurance Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">How did you find out our GYM</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">if you refered ,who by ?</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Workout Type</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Workout Type</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Membership Card</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Select Card</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Time Slot</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Select Time</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Advance Payment</label>
                        <input type="number" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Payment Type</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Payment Type</option>
                            <option defaultValue="1">UPI</option>
                            <option defaultValue="2">Cash</option>
                            <option defaultValue="3">Cheque</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Advance Payment</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Is Active</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">upload photo</label>
                        <input type="file" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}
