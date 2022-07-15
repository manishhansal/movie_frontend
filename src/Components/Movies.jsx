import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movies = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("http://localhost:9008/movie")
      .then((res) => res.json())
      .then((r) => setData(r));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:9008/movie/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        // console.log(res);
        // console.log(res.status)

        if (res.status === 200) {
          alert("Movie has been deleted successfully..");
        }
        fetchData();
      })
      .catch((err) => console.log(err));
    };
    
    const handleUpdate = (id) => {
        navigate(`/updatemovie/:${id}`)
    }
  return (
    <>
      {data?.map((item) => (
        <div key={item._id}>
          <h3>Movie Name : {item.movieName}</h3>
          <h3>Movie Title : {item.movieTitle}</h3>
          <h3>Rating : {item.rating}</h3>
          <h3>Category : {item.category}</h3>
          <h3>Price : Rs {item.price}</h3>
          <button style={{marginRight: "5px"}} onClick={() => handleUpdate(item._id)}>Update</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Movies;
