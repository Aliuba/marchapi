import React from 'react';
import styles from './FilmItem.module.css'
export const FilmItem = (props) => {
// adult: false
// backdrop_path: "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg"
// genre_ids: (5) [16, 10751, 14, 35, 12]
// id: 585083
// original_language: "en"
// original_title: "Hotel Transylvania: Transformania"
// overview: "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy."
// popularity: 1359.283
// poster_path: "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg"
// release_date: "2022-02-25"
// title: "Hotel Transylvania: Transformania"
// video: false
// vote_average: 7.1
// vote_count: 511
    const {original_title, poster_path, overview, release_date, vote_average, vote_count} = props;
    return (
        <div className={styles.filmItem}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title}` }/>
            </div>
            <div>
                <h2>{original_title}</h2>
                <span>
                Release date:{release_date}
                </span>
                <p>{overview}</p>
                <span>Vote_average:{vote_average} total votes:{vote_count}</span>
            </div>
        </div>
    );
}


