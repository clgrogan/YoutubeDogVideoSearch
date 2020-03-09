import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VideoSummaryComponent from '../components/VideoSummaryComponent'

const HomePage = props => {
  // useState variables
  const [videos, setVideos] = useState([])
  const [baseApiUrl] = useState(
    'https://www.googleapis.com/youtube/v3/search?key=' +
      // 'AIzaSyAGRN3RkBW4AyE58HfYpTqmh2H3hwuDLOk' +
      // 'AIzaSyATVUJwa9Gk36GpFS5sMlD8aytSLyjAUhM' +
      'AIzaSyDdHUSQYlKJqfJ4AGlEUnzNomp6cGFDWV0' +
      '&part=snippet&type=video&maxResults=12&q=dog'
  )
  const [searchString, setSearchString] = useState('')
  const [nextPageToken, setNextPageToken] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  // Functions
  const getVideoDataFromApi = async nextPageString => {
    let apiUrl = baseApiUrl + nextPageString
    if (props.location.state) {
      apiUrl = appendSearchValue(
        baseApiUrl,
        props.location.state.redirectSearchQuery
      )
      setSearchString(props.location.state.redirectSearchQuery)
      // props.location.state.redirectSearchQuery = ''
    }

    console.log('apiUrl: ', apiUrl)
    try {
      const resp = await axios.get(apiUrl)
      if (resp.status === 200) {
        // if this is the initial api call, set the Video array to the returned data items
        // else, append the returned data items to the previous items in the array.
        if (nextPageString === '') {
          setVideos(resp.data.items)
        } else {
          // spread 'em and merge 'em
          setVideos([...videos, ...resp.data.items])

          setNextPageToken('')
          setIsFetching(false)
        }
        if (resp.data.nextPageToken) {
          console.log('nextPageToken: ', resp.data.nextPageToken)
          setNextPageToken(resp.data.nextPageToken)
        } else {
          setNextPageToken('')
        }
        console.log(resp.data.items)
        console.log(resp)
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
      finalApiUrl = initialApiUrl + '+' + searchQuery
    } else {
      finalApiUrl = initialApiUrl
    }
    return finalApiUrl
  }

  const displaySearchQuery = queryValue => {
    return queryValue > '' ? ' & ' + queryValue : ''
  }

  const isScrolling = () => {
    // Set flag for when data is being retrieved.
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return
    }
    console.log(
      window.innerHeight + document.documentElement.scrollTop,
      '- innerHeight + scrollTop value'
    )
    console.log(document.documentElement.offsetHeight, '- offsetHeight')
    setIsFetching(true)
  }

  // useEffects

  useEffect(() => {
    if (isFetching) {
      console.log('The dog is fetching!')
      getVideoDataFromApi('&pageToken=' + nextPageToken)
    }
  }, [isFetching])

  useEffect(() => {
    // executes the Api call on page render
    getVideoDataFromApi('')
    window.addEventListener('scroll', isScrolling)
    return () => window.removeEventListener('scroll', isScrolling)
  }, [])

  return (
    <>
      <main>
        <h3 className="resultsFor">
          Search results for 'dog'{displaySearchQuery(searchString)}:
        </h3>
        <section className="searchResultsSection">
          {!videos && <h2>Loading...</h2>}
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
