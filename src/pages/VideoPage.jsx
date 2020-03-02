import React, { useState, useEffect } from 'react'
import axios from 'axios'

const VideoPage = props => {
  console.log(props)

  return (
    <>
      <p>{props.match.params.videoId}</p>
    </>
  )
}

export default VideoPage
