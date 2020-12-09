import React, { FC } from "react"
// import Video from "../../assets/video/video.mp4"
import styled from "styled-components"

export const VideoComponent: FC = () => {
  return (
    <VideoContainer>
      <VideoBg>
        <VideoSrc autoPlay loop muted>
          {/* <VideoSource src={Video} type="video/mp4" /> */}
        </VideoSrc>
        {/* <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video> */}
      </VideoBg>
    </VideoContainer>
  )
}

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
`

const VideoBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const VideoSrc = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const VideoSource = styled.source`
  width: 100%;
  height: 100%;
`
