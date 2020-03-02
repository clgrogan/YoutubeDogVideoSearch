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
          <p>{props.match.params.videoId}</p>
          <p>{youtubeUrl}</p>
          <iframe
            src={youtubeUrl}
            frameborder="0"
            className="playVideoFrame"
          ></iframe>
        </section>
      </main>
    </>
  )
}

export default VideoPage
