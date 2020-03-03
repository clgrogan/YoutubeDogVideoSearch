import React, { useState, useEffect } from 'react'
import axios from 'axios'

const VideoPage = props => {
  const [youtubeUrl, setYoutubeUrl] = useState(
    'https://www.youtube.com/embed/' + props.match.params.videoId
  )
  console.log(props.match.params)
  console.log(props.location.state)

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
                title="Dog Video"
                allowFullScreen
              ></iframe>
            </section>
          </section>
          <section className="videoTitleAndDescriptionSection">
            <h2 className="videoTitle">{props.location.state.title}</h2>
            <h1 className="videoChannel">
              {props.location.state.channelTitle}
              <span className="subduedText"> - channel</span>
              {/* {props.video.snippet.description} */}
            </h1>
          </section>
        </section>
      </main>
    </>
  )
}

export default VideoPage
