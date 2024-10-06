import "./carousel.css"


export default function Carousel (){

    const URLS = ['https://i.ibb.co/X3yp8wV/IMG-6193-Original.jpg',
    'https://i.ibb.co/BGkRnf2/IMG-3094.jpg',
    'https://i.ibb.co/t4SwhjZ/IMG-3096.jpg',
    'https://i.ibb.co/xqt7y13/IMG-3124-Original.jpg',
    'https://i.ibb.co/PNZxF4Z/IMG-9209.jpg',
    'https://i.ibb.co/VMdTQs8/IMG-8992.jpg',
    'https://i.ibb.co/W64RJwR/IMG-7752.jpg',
    'https://i.ibb.co/Nr0hCRw/IMG-5981.jpg',
    'https://i.ibb.co/YRLvZFn/IMG-1244.jpg'
]
    
    return (

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-inner">
                {URLS.map((url, keys)=>

                    <div className={`carousel-item ${keys === 0 ? 'active' : ''}`} key={keys}>
                        <img src={url} className="d-block w-100 carousel_img" alt="..." />
                    </div>

                )}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <i className=" carousel-control-prev-icon "></i>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <i className="carousel-control-next-icon "></i>
            </button>
        </div>
    )
}

