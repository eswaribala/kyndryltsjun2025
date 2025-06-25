import React, { useEffect, useState } from "react";
import api from "../services/api";

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

const VehicleList: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    api.get("/v1.0")
      .then(res => setVehicles(res.data))
      .catch(err => console.error("Error fetching vehicles:", err));
  }, []);

  return (
    <div>
      <h3>Vehicles</h3>
      <ul>
        {vehicles.map(v => (
          <li key={v.registrationNumber}>
            {v.make} {v.model} - {v.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
