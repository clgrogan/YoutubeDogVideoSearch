import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VideoSummaryComponent from '../components/VideoSummaryComponent'

const HomePage = props => {
  // useState variables
  const [videos, setVideos] = useState([])
  const [baseApiUrl, setBaseApiUrl] = useState(
    'https://www.googleapis.com/youtube/v3/search?key=' +
      'AIzaSyAGRN3RkBW4AyE58HfYpTqmh2H3hwuDLOk' +
      '&part=snippet&type=video&maxResults=10&q=dog'
  )

  // Functions
  const getVideoDataFromApi = async () => {
    console.log(baseApiUrl)
    let apiUrl = baseApiUrl
    if (props.location.state) {
      apiUrl = appendSearchValue(
        baseApiUrl,
        props.location.state.redirectSearchQuery
      )
      // props.location.state.redirectSearchQuery = ''
    }

    console.log('apiUrl: ', apiUrl)
    try {
      const resp = await axios.get(apiUrl)
      if (resp.status === 200) {
        setVideos(resp.data.items)
        console.log(resp.data.items)
      }
    } catch (error) {
      if (error.response) {
        // api server responded with status code != 2xx
        console.log(error.response)
        console.log(error.response.data.error.message)
      } else if (error.request) {
        // no response received after request submitted
        console.log(error.request)
      } else {
        // An error occurred setting up api request.
        // The request was not submitted to the api server.
        console.log(error.request)
      }
      // Log the error
      console.log(error)
    }
  }

  const appendSearchValue = (initialApiUrl, searchQuery) => {
    let finalApiUrl = ''
    if (searchQuery && searchQuery > ' ') {
      finalApiUrl =
        initialApiUrl + '+' + props.location.state.redirectSearchQuery
    } else {
      finalApiUrl = initialApiUrl
    }
    return finalApiUrl
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
