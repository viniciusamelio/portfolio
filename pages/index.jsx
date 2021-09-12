import Head from 'next/head'
import Navbar from '../components/navbar';
import Image from 'next/image';
import Button from '../components/button';
import React, { useState, useEffect } from 'react';
import 'glider-js/glider.min.css';
import Glider from 'react-glider';
import Slide from '../components/slide';
import { motion } from "framer-motion";

export default function Home() {


  const gliderRef = React.useRef();
  const [showGlider, setShowGlider] = useState(false);

  useEffect(() => {
    setShowGlider(true);
  });

  useEffect(() => {
    if (showGlider) {
      sliderAuto(gliderRef.current, 2000);
    }
  });

  const sliderAuto = (slider, miliseconds) => {
    const slidesCount = slider.track.childElementCount;
    let slideTimeout = null;
    let nextIndex = 1;

    function slide() {
      slideTimeout = setTimeout(
        function () {
          if (nextIndex >= slidesCount) {
            nextIndex = 0;
          }
          slider.scrollItem(nextIndex++);
        },
        miliseconds
      );
    }

    slider.ele.addEventListener('glider-animated', function () {
      window.clearInterval(slideTimeout);
      slide();
    });

    slide();
  }


  const carousel = () => {
    if (showGlider) {
      return <Glider draggable={true} scrollLock={true} responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.75
          }
        }
      ]} hasArrows={true} duration={0.75} ref={gliderRef}>
        <Slide key="0" tags={["React", "FlexBox"]} image={<Image src="/pixel.png" width="140px" height="72px" />} project={"https://pixelcoders.com.br"} github="https://github.com/viniciusamelio/pixelcoders-react" name="PixelCoders" />
        <Slide key="1" tags={["Flutter", "TDD", "Clean Arch"]} image={<Image src="/riven.png" width="90px" height="90px" />} project={"https://drive.google.com/file/d/1KvOvX6U3YCR6bvn9KNbuIifqp_Y8gG9R/view"} github="https://github.com/viniciusamelio/riven" name="Riven" />
        <Slide key="2" tags={["Flutter", "NodeJS", "AdonisJS"]} image={<Image src="/biometricas.svg" width="90px" height="90px" />} project={"https://drive.google.com/file/d/155y9_F43xDOuX3xoYWs_sVlKQh48--5g/view?usp=sharing"} github="https://github.com/viniciusamelio/biometricas" name="Biométricas" />
        <Slide key="3" tags={["Next", "Bulma"]} image={<Image src="/sigla.png" width="190px" height="70px" />} project={"https://sigla-hml.vercel.app"} github="https://github.com/viniciusamelio/sigla" name="Sigla" />
        <Slide key="4" tags={["Flutter"]} image={<Image src="/pixeltasks.png" width="70px" height="70px" />} project={"https://drive.google.com/file/d/1qxJwlaVUzONS0lnoMIc-lapztK0rkwTY/view?usp=sharing"} github="https://github.com/viniciusamelio/pixeltasks" name="PixelTasks" />

      </Glider>
    }
  }

  return (
    <main className="is-12">
      <Head>
        <title>
          Vinicius Amélio - Desenvolvedor de Software
        </title>
        <meta charset="UTF-8"></meta>
        <meta name="description" content="Desenvolvimento de Sites, WebApps e Mobile Apps" />
        <meta name="author" content="Vinicius Amélio"></meta>
        <link rel="shortcut icon" href="/icon.ico" />
      </Head>
      <Navbar />
      <div className="column is-12 is-flex is-align-items-center is-justify-content-center" style={{ marginTop: "105px" }}>
        <div className="column">
          <motion.div initial={{ scale: 0.7, x: -500}}
            animate={{ scale: 0.9, x:0 }}
            transition={{
              type: "spring",
              duration: 5,
              stiffness: 260,
              damping: 20
            }} className="column is-12-mobile has-text-centered-mobile is-flex is-align-items-center is-justify-content-center">
            <div className="columns">
              <div className="column is-12-mobile is-3-desktop is-offset-1-desktop is-align-items-center is-flex is-justify-content-center">
                <Image src="/picture.png" width="140px" height="140px" />
              </div>
              <div className="column is-12-mobile is-8-desktop">
                <p className="is-size-4-mobile mt-2 has-text-weight-light is-size-3 has-text-white">
                  Oi, meu nome é
                </p>
                <h1 className="is-size-3-mobile has-text-weight-bold is-size-2 has-text-white">
                  Vinicius Amélio
                </h1>
                <h2 className="has-text-white is-size-4 is-size-5-mobile" style={{ fontWeight: 'lighter' }}>
                  Desenvolvedor de software <br />Suzano - SP
                </h2>
                <h3 className="is-size-4 is-size-5-mobile" style={{ fontWeight: 'lighter', color: '#B45AFF' }}>
                  React, Next, Flutter, NodeJS, PHP e Adobe XD
                </h3>
                <div className="column is-12 has-text-centered is-hidden-desktop">
                  <Button onClick={() => window.open('https://api.whatsapp.com/send?phone=5511951213836&text=Ol%C3%A1%2CVinicius%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!', "__blank")} text="Me contrate" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="column is-12-mobile is-8-desktop is-offset-2-desktop has-text-centered-mobile">
        <h4 className="has-text-white is-size-4 is-size-5-mobile ml-2 my-2" style={{ fontWeight: 'lighter' }}>
          Alguns projetos
          </h4>
        {carousel()}
      </div>
    </main>
  );
}
