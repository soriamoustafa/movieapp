import image1 from './images/slideone.jpg';
import image2 from './images/slidetwo.jpg';
import './slider.css';
function Slider() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='drop'>
                        <div className='slider-content'>
                            <h1>Unlimited movies, TV series, and more</h1>
                            <p>Stay ahead with the newest movies added every week. Whether youre into action, romance, or drama, we&apos;ve got something for everyone. Don&apos;t miss out on the latest in cinema!</p>
                            <button className='btn btn-light'>Discover Now</button>
                        </div>
                    </div>
                    <img src={image1} className="d-block " alt="..."/>
                </div>
                <div className="carousel-item">
                    <div className='drop'>
                        <div className='slider-content'>
                        <h1>New Releases Just for You.</h1>
                        <p>Discover a world of entertainment at your fingertips. Enjoy a vast library of classic hits and the latest blockbusters, all ready to stream with just a click. Your movie night starts here!</p>
                        <button className='btn btn-light'>Discover Now</button>
                        </div>
                    </div>
                    <img src={image2} className="d-block " alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;