import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from "react-bootstrap"
// import {ArrowRightCircle} from "react-bootstrap-icons"
import './banner.css'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer. ", "Web Designer. ", "Dreamer. " ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return (
        <section className="homepage-banner padding-md" id="banner">
            <div className='padding-md banner_container'>
                <div className="align-items-center justify-content-between">
                    <div  id='intro-description'>
                        <span className='tagline'> Welcome to my Website</span>
                        <h3>{`I'm Tai Pham, a`} <span className='wrap'> {text}</span></h3>
                        <p> Feel free to explore — whether you’re interested in looking at some of my latest projects, or simply browsing around. Dive in, don’t hesitate to reach out! Enjoy your visit!</p>
                    </div>
                   
                </div>

            </div>
        </section>
    );
};

export default Banner;