import ReactPlayer from 'react-player'

import {
  VideoPlayerContainer,
  VideoTitle,
  VideoStats,
  HorizontalLine,
} from './styledComponents'

import './index.css'

const videoUrl = 'https://youtu.be/Y0GucESe5xA-4'

const VideoPlayer = () => (
  <VideoPlayerContainer>
    <ReactPlayer
      url={videoUrl}
      controls
      width="100%"
      className="video-player"
    />
    <VideoTitle>Mr-Kommula | A Beautiful Melody</VideoTitle>
    <VideoStats>You Can See It - March 11, 2022</VideoStats>
    <VideoStats>Watch the video and please do comment</VideoStats>
    <HorizontalLine />
  </VideoPlayerContainer>
)

export default VideoPlayer
