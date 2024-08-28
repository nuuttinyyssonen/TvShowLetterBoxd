import { useEffect, useState } from "react";
import getTvShows from "../../services/getTvShows";
import '../style/main/mainpage.css';

const Main = () => {

    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        const fetchTopRatedShows = async() => {
            try {
                const data = await getTvShows.getTopRatedShows();
                // console.log(data)
                setTvShows(data.results)
            } catch(error) {
                console.log(error);
            }
        }
        fetchTopRatedShows();
    }, []);

    const tvShowMap = tvShows.map((_, key) => {
        if(tvShows.length > 0) {
            const baseUrl = "https://image.tmdb.org/t/p/w92";
            return (
                <li>
                    <p className="text">{tvShows[key].original_name}</p>
                    <p className="text">{tvShows[key].vote_average}</p>
                    <img className="posterImage" src={baseUrl + tvShows[key].poster_path} />
                </li>
            )
        }
    });

    return (
        <div>
            <h1 className="Headline">Top Rated TV Shows</h1>
            <ul className="showList">
                {tvShowMap}
            </ul>
        </div>
    )
};

export default Main;