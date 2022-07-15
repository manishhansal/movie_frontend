import React, { useEffect, useState } from "react";

const Movies = () => {
  const [data, setData] = useState([]);

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
  return (
    <>
      {data?.map((item) => (
        <div key={item._id}>
          <h2>Movie Name : {item.movieName}</h2>
          <h2>Movie Title : {item.movieTitle}</h2>
          <h2>Rating : {item.rating}</h2>
          <h2>Category : {item.category}</h2>
          <h2>Price : Rs {item.price}</h2>
          <button>Update</button>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Movies;
