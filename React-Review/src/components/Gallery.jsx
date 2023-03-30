import "../styles/Gallery.css"
function Gallery() {
    return (
     <section className="gallery-container">
        <h2 style={{textAlign:"center"}}>Gallery</h2>
        <ul className="no-bullet">
          <li><img className="gallery-image" height={200} src="https://picsum.photos/id/237/200/300" alt="1"/></li>
          <li><img className="gallery-image" height={200} src="https://picsum.photos/id/237/200/300" alt="2"/></li>
          <li><img className="gallery-image" height={200} src="https://picsum.photos/id/237/200/300" alt="3"/></li>
        </ul>
      </section>
    );
}

export default Gallery

