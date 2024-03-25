import React, { useEffect } from "react";
import "./main.css";
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import img_1 from "../../Assets/img_1.jpg";
import img_2 from "../../Assets/img_2.jpg";
import img_3 from "../../Assets/img_3.jpg";
import img_4 from "../../Assets/img_4.jpg";
import img_5 from "../../Assets/img_5.jpg";
import img_6 from "../../Assets/img_6.jpg";
import img_7 from "../../Assets/img_7.jpg";
import img_8 from "../../Assets/img_8.jpg";
import img_9 from "../../Assets/img_9.jpg";
import img_10 from "../../Assets/img_10.jpg";
import img_11 from "../../Assets/img_11.jpg";
import img_12 from "../../Assets/img_12.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img_1,
    destTitle: "Lorem",
    location: "New World",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    imgSrc: img_2,
    destTitle: "İpsum",
    location: "New World",
    grade: "CULTURAL",
    fees: "$600",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    imgSrc: img_3,
    destTitle: "Dolor",
    location: "New World",
    grade: "RELAX",
    fees: "$800",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    imgSrc: img_4,
    destTitle: "Sit",
    location: "Old World",
    grade: "PIECE",
    fees: "$900",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    imgSrc: img_5,
    destTitle: "Amet",
    location: "Old World",
    grade: "Nothing",
    fees: "$700",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    imgSrc: img_6,
    destTitle: "Consectetur",
    location: "My Head",
    grade: "CULTURAL RELAX",
    fees: "$1000",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 7,
    imgSrc: img_7,
    destTitle: "Adipisicing",
    location: "New World",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 8,
    imgSrc: img_8,
    destTitle: "Lorem",
    location: "New World",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 9,
    imgSrc: img_9,
    destTitle: "Elit",
    location: "IDK",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },

  {
    id: 10,
    imgSrc: img_10,
    destTitle: "Eos",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "900",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 11,
    imgSrc: img_11,
    destTitle: "Ipsam",
    location: "World",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 12,
    imgSrc: img_12,
    destTitle: "Non",
    location: "Just My Dream",
    grade: "PERSONAL RELAX",
    fees: "$800",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];


const Main = () => {


    // CREATING A REACT HOOK TO ADD A SCROOL ANIMATON
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
