// Named import for the Heart icon from lucide-react
import { Heart } from 'lucide-react';

export default function MovieCard({ movie }) {

    function handleFavourite() {
        alert(`You have favourited ${movie.title}!`);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={handleFavourite}>
                        <Heart />
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-description">{movie.description}</p>
            </div>
        </div>
    );
}