import React from "react";

const AddMovies = () => {
  const [form, setForm] = React.useState({
    movieName: "",
    movieTitle: "",
    rating: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payloadjson = JSON.stringify(form);

    fetch(`http://localhost:9008/movie`, {
      method: "POST",
      body: payloadjson,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res)
        // console.log(res.status)

        if (res.status === 200) {
          alert("Movie added successfully..");
        }
      })
      .catch((err) => console.log(err));
  };

  const { movieName, movieTitle, rating, category, price } = form;
  // console.log(form)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="movieName"
          placeholder="Enter Movie Name"
          value={movieName}
          onChange={handleChange}
        />
        <input
          id="movieTitle"
          placeholder="Enter Movie Title"
          value={movieTitle}
          onChange={handleChange}
        />
        <input
          id="rating"
          placeholder="Enter Rating"
          value={rating}
          onChange={handleChange}
        />
        <input
          id="category"
          placeholder="Enter Category"
          value={category}
          onChange={handleChange}
        />
        <input
          id="price"
          placeholder="Enter Price"
          value={price}
          onChange={handleChange}
        />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default AddMovies;
