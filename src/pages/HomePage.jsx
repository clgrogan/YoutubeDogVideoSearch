import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VideoSummaryComponent from '../components/VideoSummaryComponent'

const HomePage = () => {
  // useState variables
  const [videos, setVideos] = useState([])
  const [apiUrl, setApiUrl] = useState(
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCjPgL5JrQhnagPxwPPrAj7PeI35oB9Mg0&part=snippet&type=video&q=dog'
  )

  // Functions
  const getVideoDataFromApi = async () => {
    const resp = await axios.get(apiUrl)
    if (resp.status === 200) {
      setVideos(resp.data.items)
      console.log(resp.data.items)
    } else {
      console.log('API Status != 200: ', resp.status)
    }
  }
  // useEffects ~for page render
  useEffect(() => {
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
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
        <p>This will be the body of the home page.</p>
      </main>
    </>
  )
}

export default HomePage
