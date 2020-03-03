import React, { useState, useEffect } from 'react'
import axios from 'axios'

const VideoPage = props => {
  const [youtubeUrl, setYoutubeUrl] = useState(
    'https://www.youtube.com/embed/' + props.match.params.videoId
  )
  console.log(props)

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
            <h2 className="videoTitle">
              Baby Dogs - Cute and Funny Dog Videos Compilations #25 | Aww
              Animals
              {/* {props.video.snippet.title} */}
            </h2>
            <h1 className="videoChannel">
              SomeChannelNameHere
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
