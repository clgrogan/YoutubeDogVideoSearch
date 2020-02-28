import React from 'react'
import { Link } from 'react-router-dom'

// prettier-ignore
const VideoSummaryComponent = props => {
  console.log(props)
  console.log(props.video.id)
  console.log(props.video.id.videoId)
  return (
    <section className="videoSummaryContainer">
      <p className="summaryVideoTitle"><Link to={'/video/' + props.video.id.videoId}>{props.video.snippet.title}</Link></p>
    </section>
  )
}
export default VideoSummaryComponent
