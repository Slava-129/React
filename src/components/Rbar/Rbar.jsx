import './Rbar.css';

const spotify = () => {
    return (
        <div className="Rbar">
            <div className="Spotify">
                <iframe src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0"
                    width="100%" height="380" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    title="Sporify">
                </iframe>
            </div>
        </div>
    );
}

export default spotify;