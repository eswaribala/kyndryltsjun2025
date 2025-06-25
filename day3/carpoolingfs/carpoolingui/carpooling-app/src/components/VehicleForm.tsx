import React, { useState } from "react";
import api from "../services/api";
import "./Vehicle.css";
interface Vehicle {
    registrationNumber: string;
    make: string;
    model: string;
    year: number;
    color: string;
    chassisNumber: string;
    engineNumber: string;
    dateAdded: Date;
    fuelType: string;
}

const VehicleForm: React.FC = () => {
  const [formData, setFormData] = useState<Vehicle>({
    registrationNumber: "",
    make: "",
    model: "",
    year: 0,
    color: "",
    chassisNumber: "",
    engineNumber: "",
    dateAdded: new Date(),
    fuelType: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/v1.0", formData);
      alert("Vehicle created!");
    } catch (error) {
      console.error("Error creating vehicle:", error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input name="registrationNumber" placeholder="Registration Number" onChange={handleChange} required />
      <input name="make" placeholder="Make" onChange={handleChange} />
      <input name="model" placeholder="Model" onChange={handleChange} required />
      <input name="color" placeholder="Color"  onChange={handleChange} />
      <input name="chassisNumber" placeholder="Chasss Number"  onChange={handleChange} required />
      <input name="engineNumber" placeholder="Engine Number" type="password" onChange={handleChange} required />
      <input name="year" placeholder="Year" type="number" onChange={handleChange} required />
      <input name="dateAdded" placeholder="Date Added" type="date" onChange={handleChange} required />
      <input name="fuelType" placeholder="Fuel Type" list="fuelTypes" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
    <div>
      <datalist id="fuelTypes">
        <option value="Petrol" />
        <option value="Diesel" />
        <option value="Electric" />
        <option value="Hybrid" />
      </datalist>
    </div>
    </div>
  );
};

export default VehicleForm;
