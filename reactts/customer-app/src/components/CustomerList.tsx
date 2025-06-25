import React, { useEffect, useState } from "react";
import api from "../services/api";

interface Customer {
  customerId: number;
  firstName: string;
  lastName: string;
  email: string;
}

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    api.get("/v1.0")
      .then(res => setCustomers(res.data))
      .catch(err => console.error("Error fetching customers:", err));
  }, []);

  return (
    <div>
      <h3>Customers</h3>
      <ul>
        {customers.map(c => (
          <li key={c.customerId}>
            {c.firstName} {c.lastName} - {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
