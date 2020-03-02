import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VideoSummaryComponent from '../components/VideoSummaryComponent'

const HomePage = () => {
  // useState variables
  const [videos, setVideos] = useState([])
  const [baseApiUrl, setBaseApiUrl] = useState(
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCjPgL5JrQhnagPxwPPrAj7PeI35oB9Mg0&part=snippet&type=video&maxResults=10&q=dog'
  )

  // Functions
  const getVideoDataFromApi = async () => {
    const resp = await axios.get(baseApiUrl)
    if (resp.status === 200) {
      setVideos(resp.data.items)
      console.log(resp.data.items)
    }
  }
  // useEffects
  useEffect(() => {
    // executes the Api call on page render
    getVideoDataFromApi()
  }, [])

  return (
    <>
      <main>
        <section className="searchResultsSection">
          {videos.map(video => {
            return (
              <VideoSummaryComponent key={video.id.videoId} video={video} />
            )
          })}
        </section>
      </main>
    </>
  )
}

export default HomePage
