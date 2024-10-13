import { useState, useEffect } from "react";

const Occupancy = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p className="mt-4" style={{ color: "blue" }}>
        Property Occupany Overview
      </p>
      <div>
        {data.map((post) => (
          <div key={post.id}></div>
        ))}
      </div>
    </>
  );
};

export default Occupancy;
