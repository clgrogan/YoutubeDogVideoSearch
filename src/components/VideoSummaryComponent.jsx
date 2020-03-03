import React from 'react'
import { Link } from 'react-router-dom'

const VideoSummaryComponent = props => {
  console.log(props)
  console.log(props.video.id)
  console.log(props.video.snippet.thumbnails.medium)
  return (
    <>
      <section className="videoSummaryContainer">
        <Link
          to={{
            pathname: '/video/' + props.video.id.videoId,
            state: {
              title: props.video.snippet.title,
              channelTitle: props.video.snippet.channelTitle,
            },
          }}
        >
          <section className="videoSummaryCard cardColor">
            <div className="videoThumbNailContainer">
              <img
                className="videoThumbnail"
                src={props.video.snippet.thumbnails.medium.url}
                alt={
                  'Thumbnail image for video titled ' +
                  props.video.snippet.title
                }
              />
            </div>
            <div>
              <p className="summaryVideoTitle">{props.video.snippet.title}</p>
              <p className="summaryVideoDescription">
                {props.video.snippet.description}
              </p>
            </div>
          </section>
        </Link>
      </section>
    </>
  )
}
export default VideoSummaryComponent
