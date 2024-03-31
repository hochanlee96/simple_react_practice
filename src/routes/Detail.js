import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      <div>
        <img src={""} alt="" />
        <p>
          {
            "Sit exercitation proident adipisicing dolore veniam cupidatat incididunt ea tempor esse est deserunt ullamco id."
          }
        </p>
      </div>
    </div>
  );
}

export default Detail;
