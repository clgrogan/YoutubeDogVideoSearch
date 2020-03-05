import React, { useState } from 'react'

const VideoPage = props => {
  const [youtubeUrl] = useState(
    'https://www.youtube.com/embed/' + props.match.params.videoId
  )
  return (
    <>
      <main className="videoPageMain">
        <section className="videoPageSection">
          <section className="videoContainer cardColor">
            <section className="iFrameContainer">
              <iframe
                src={youtubeUrl}
                frameBorder="0"
                className="playVideoFrame"
                title={props.location.state.title}
                allowFullScreen
              ></iframe>
            </section>
          </section>
          <section className="videoTitleAndDescriptionSection">
            <h2 className="videoTitle">{props.location.state.title}</h2>
            <h1 className="videoChannel">
              {props.location.state.channelTitle}
              <span className="subduedText">
                {' '}
                - <i className="fab fa-youtube"></i> channel
              </span>
            </h1>
          </section>
        </section>
      </main>
    </>
  )
}

export default VideoPage
