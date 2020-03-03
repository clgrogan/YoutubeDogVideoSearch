import React from 'react'
import { Link } from 'react-router-dom'

const VideoSummaryComponent = props => {
  // Create a video object to store & access preferred props.
  const video = {
    videoId: props.video.id.videoId,
    title: props.video.snippet.title,
    description: props.video.snippet.description,
    channelTitle: props.video.snippet.channelTitle,
    mediumThumbnailUrl: props.video.snippet.thumbnails.medium.url,
  }
  return (
    <>
      <section className="videoSummaryContainer">
        <Link
          to={{
            pathname: '/video/' + video.videoId,
            state: {
              title: video.title,
              description: video.description,
              channelTitle: video.channelTitle,
            },
          }}
        >
          <section className="videoSummaryCard cardColor">
            <div className="videoThumbNailContainer">
              <img
                className="videoThumbnail"
                src={video.mediumThumbnailUrl}
                alt={'Thumbnail image for video titled ' + video.title}
              />
            </div>
            <div>
              <p className="summaryVideoTitle">{video.title}</p>
              <p className="summaryVideoDescription">{video.description}</p>
            </div>
          </section>
        </Link>
      </section>
    </>
  )
}
export default VideoSummaryComponent
