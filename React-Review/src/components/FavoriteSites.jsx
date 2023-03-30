import "../styles/FavoriteSites.css"

function FavoriteSites() {
    return (
      <section className="favorite-sites">
        <h2 className="centered-text">Favorite Sites</h2>
        <ul className="favorite-sites-list">
          <li><a href="https://www.nytimes.com/" className="favorite-site-link">The New York Times</a></li>
          <li><a href="https://www.youtube.com/" className="favorite-site-link">YouTube</a></li>
          <li><a href="https://www.reddit.com/" className="favorite-site-link">Reddit</a></li>
          <li><a href="https://www.wikipedia.org/" className="favorite-site-link">Wikipedia</a></li>
          <li><a href="https://www.spotify.com/" className="favorite-site-link">Spotify</a></li>
        </ul>
      </section>
    );
  }

  export default FavoriteSites;