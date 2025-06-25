import React, { useState } from "react";
import api from "../services/api";
import "./CustomerForm.css";
interface Customer {
  firstName: string;
  middleName?: string;
  lastName: string;
  contactNo?: number;
  email: string;
  password: string;
}

const CustomerForm: React.FC = () => {
  const [formData, setFormData] = useState<Customer>({
    firstName: "",
    middleName: "",
    lastName: "",
    contactNo: undefined,
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/v1.0", formData);
      alert("Customer created!");
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input name="middleName" placeholder="Middle Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input name="contactNo" placeholder="Contact No" type="number" onChange={handleChange} />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerForm;
