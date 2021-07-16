import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({ lightBg, id, topLine, alt, titles }) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        {titles.map((title, index) => (
          <InfoRow imgStart={title.imgStart}>
            <Column1>
              <TextWrapper key={index}>
                {index === 0 ? <TopLine>{topLine}</TopLine> : null}
                <Heading lightText={title.lightText}>{title.headline}</Heading>
                <Subtitle darkText={title.darkText}>
                  {title.description}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={title.img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        ))}
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
