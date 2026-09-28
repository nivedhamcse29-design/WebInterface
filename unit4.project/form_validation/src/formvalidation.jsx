import React, { useState } from "react";
import "./formvalidation.css";
function FormValidation() {
  const [form, setForm] = useState({
    username: "",
    aadharName: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    nationality: "",
    permanentAddress: "",
    city: "",
    pincode: "",
    temporaryAddress: "",
    qualification: "",
    occupation: "",
    photo: null
  });
  const [errors, setErrors] = useState({});
  const change = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value
    });
    setErrors({
      ...errors,
      [name]: ""
    });
  };
  const submit = (e) => {
    e.preventDefault();
    let err = {};
    if (!form.username)
      err.username = "Username is required";
    if (!form.aadharName)
      err.aadharName = "Aadhaar name is required";
    if (
      form.username &&
      form.aadharName &&
      form.username.toLowerCase() !==
      form.aadharName.toLowerCase()
    )
      err.username = "Username and Aadhaar Name must be same";
    if (!form.name)
      err.name = "Name is required";
    if (!form.email)
      err.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Enter valid email";
    if (!/^[0-9]{10}$/.test(form.phone))
      err.phone = "Enter 10 digit number";
    if (!form.password)
      err.password = "Password is required";
    else if (form.password.length < 6)
      err.password = "Minimum 6 characters";
    if (!form.confirmPassword)
      err.confirmPassword = "Confirm password";
    else if (form.password !== form.confirmPassword)
      err.confirmPassword = "Passwords do not match";
    if (!form.permanentAddress)
      err.permanentAddress = "Permanent address is required";
    if (!form.city)
      err.city = "City is required";
    if (!/^[0-9]{6}$/.test(form.pincode))
      err.pincode = "Enter 6 digit pincode";
    if (!form.temporaryAddress)
      err.temporaryAddress = "Temporary address is required";
    if (form.photo) {
      if (!["image/jpeg", "image/png"].includes(form.photo.type))
        err.photo = "Only JPG and PNG allowed";
      if (form.photo.size > 2 * 1024 * 1024)
        err.photo = "Photo must be below 2 MB";
    }
    setErrors(err);
    if (Object.keys(err).length === 0)
      alert("Registration Successful!");
  };
  const reset = () => {
    setForm({
      username: "",
      aadharName: "",
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "",
      nationality: "",
      permanentAddress: "",
      city: "",
      pincode: "",
      temporaryAddress: "",
      qualification: "",
      occupation: "",
      photo: null
    });
    setErrors({});
  };
  return (
    <div className="page">
      <form className="registration-form" onSubmit={submit}>
        <div className="form-header">
          <h1>Form Validation</h1>
          <p>Enter your details</p>
        </div>
        <div className="section-title">
          Personal Details
        </div>
        <div className="form-grid">
          <div className="field">
            <label>Username *</label>
            <input
              name="username"
              value={form.username}
              onChange={change}
            />
            <small>{errors.username}</small>
          </div>
          <div className="field">
            <label>Aadhaar Name *</label>
            <input
              name="aadharName"
              value={form.aadharName}
              onChange={change}
            />
            <small>{errors.aadharName}</small>
          </div>
          <div className="field">
            <label>Full Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={change}
            />
            <small>{errors.name}</small>
          </div>
          <div className="field">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={change}
            />
            <small>{errors.email}</small>
          </div>
          <div className="field">
            <label>Mobile Number *</label>
            <div className="mobile-box">
              <select>
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                name="phone"
                value={form.phone}
                onChange={change}
                maxLength="10"
                placeholder="10 digit number"
              />
            </div>
            <small>{errors.phone}</small>
          </div>
          <div className="field">
            <label>New Password *</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={change}
            />
            <small>{errors.password}</small>
          </div>
          <div className="field">
            <label>Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={change}
            />
            <small>{errors.confirmPassword}</small>
          </div>
          <div className="field">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={change}
            />
          </div>
          <div className="field">
            <label>Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={change}
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label>Nationality</label>
            <input
              name="nationality"
              value={form.nationality}
              onChange={change}
              placeholder="Indian"
            />
          </div>
        </div>
        <div className="section-title">
          Permanent Address
        </div>
        <div className="form-grid">
          <div className="field full">
            <label>Full Address *</label>
            <textarea
              name="permanentAddress"
              value={form.permanentAddress}
              onChange={change}
            />
            <small>{errors.permanentAddress}</small>
          </div>
          <div className="field">
            <label>City *</label>
            <input
              name="city"
              value={form.city}
              onChange={change}
            />
            <small>{errors.city}</small>
          </div>
          <div className="field">
            <label>Pincode *</label>
            <input
              name="pincode"
              value={form.pincode}
              onChange={change}
              maxLength="6"
            />
            <small>{errors.pincode}</small>
          </div>
        </div>
        <div className="section-title">
          Temporary Address
        </div>
        <div className="form-grid">
          <div className="field full">
            <label>Full Address *</label>
            <textarea
              name="temporaryAddress"
              value={form.temporaryAddress}
              onChange={change}
            />
            <small>{errors.temporaryAddress}</small>
          </div>
        </div>
        <div className="section-title">
          Other Details
        </div>
        <div className="form-grid">
          <div className="field">
            <label>Qualification</label>
            <input
              name="qualification"
              value={form.qualification}
              onChange={change}
            />
          </div>
          <div className="field">
            <label>Occupation</label>
            <input
              name="occupation"
              value={form.occupation}
              onChange={change}
            />
          </div>
          <div className="field full">
            <label>Upload Photo</label>
            <input
              type="file"
              name="photo"
              accept=".jpg,.jpeg,.png"
              onChange={change}
            />
            <small>{errors.photo}</small>
          </div>
        </div>
        <div className="button-area">
          <button
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
          <button
            type="button"
            className="reset-button"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
export default FormValidation;