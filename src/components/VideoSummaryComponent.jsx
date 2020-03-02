import React from 'react'
import { Link } from 'react-router-dom'

const VideoSummaryComponent = props => {
  console.log(props)
  console.log(props.video.id)
  console.log(props.video.snippet.thumbnails.medium)
  return (
    <Link to={'/video/' + props.video.id.videoId}>
      <section className="videoSummaryContainer">
        <img
          className="videoThumbnail"
          src={props.video.snippet.thumbnails.medium.url}
          alt={'Thumbnail image for video titled ' + props.video.snippet.title}
        />
        <div>
          <p className="summaryVideoTitle">{props.video.snippet.title}</p>
          <p className="summaryVideoDescription">
            {props.video.snippet.description}
          </p>
        </div>
      </section>
    </Link>
  )
}
export default VideoSummaryComponent
