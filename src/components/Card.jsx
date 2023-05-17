import "../sass/Card.scss"
import svg from "../assets/icons/star.svg"
import {BiTimeFive} from 'react-icons/bi'
import {HiLocationMarker} from 'react-icons/hi'
import MiniCard from "./common/MiniCard";

export default function Card({data}) {

    const length = data.tags.length;
    const namesList = data.tags.map(function(tag){
                        return (
                            <div className="tag" key={tag.index}>
                                    <p>{tag}</p>
                            </div>
                        );
                      })

    function Tag2(){
        return (
            <>
                <MiniCard data={{img: '../src/assets/icons/snacks.svg', title: 'Snacks'}}/>
                <MiniCard data={{img: '../src/assets/icons/transport.svg', title: 'Transport'}}/>
                <MiniCard data={{img: '../src/assets/icons/photo.svg', title: 'Photo/Video'}}/>
                <MiniCard data={{img: '../src/assets/icons/activities.svg', title: 'Activities'}}/>
            </>
        )
    }

    function Tag3(){
        return (
            <>
                <MiniCard data={{img: '../src/assets/icons/photo.svg', title: 'Photo/Video'}}/>
                <MiniCard data={{img: '../src/assets/icons/activities.svg', title: 'Activities'}}/>
            </>
        )
    }

  return (
    <div className="card">
        <div className="card-image">
            <img src={data.image} />
        </div>
        <div className="card-content">
            <h2 className="title">{data.title}</h2>
            <div className="caption">
                <div className="duration">
                    <BiTimeFive className="time"/><span>{data.time}</span>
                </div>
                <div className="location">
                    <HiLocationMarker className="marker"/><span>Goa, India</span>
                </div>
            </div>
            <hr />
            <div className="tags">
                { length === 2 ? <Tag2 /> :  <Tag3 />}
            </div>
            <div className="oval-tags">
                { namesList }
            </div>
        </div>
        <div className="line"></div>
        <div className="card-rating">
            <div className="ratings">
                <div className="stars">
                    <img alt="" src={svg} />
                    <img alt="" src={svg} />
                    <img alt="" src={svg}/>
                    <img alt="" src={svg} />
                </div>
                    <div className="rectangle-div">
                        <b className="b">4.7</b>
                    </div>
            </div>
            <p className="reviews">36 reviews</p>
            <h4>Starting from</h4>
            <p className="card-price">₹ {data.price}</p>
            <button className="details">View Details</button>
        </div>
        </div>
  )
}
