
import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'

const HeroSection = () => {
    const [hover1, sethover1] = useState(false);
    const [hover2, sethover2] = useState(false);

    const onHover1 = () => {
        sethover1(!hover1);
    }

    const onHover2 = () => {
        sethover2(!hover2);
    }

    return (
        <HeroContainer id = "home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, Welcome to my website!</HeroH1>
                <HeroP>
                    My Name is Ross Malcolm
                </HeroP>
                <HeroBtnWrapper>
                    <Button to={{ pathname: "https://www.linkedin.com/in/ross-malcolm-607851170" }} target="_blank" onMouseEnter={onHover1} onMouseLeave={onHover1} primary='true' dark='true'>
                        LinkedIn {hover1 ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                    <Button to={{ pathname: "https://github.com/RossMalcolm" }} target="_blank" onMouseEnter={onHover2} onMouseLeave={onHover2} primary='true' dark='true'>
                        GitHub {hover2 ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
