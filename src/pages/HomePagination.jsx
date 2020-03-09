import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VideoSummaryComponent from '../components/VideoSummaryComponent'

const HomePagination = props => {
  // useState variables
  const [videos, setVideos] = useState([])
  const [baseApiUrl] = useState(
    'https://www.googleapis.com/youtube/v3/search?key=' +
      'AIzaSyDuzEJUKkFyRae8Dbc11VHOJCfYqT7L-IE' +
      '&part=snippet&type=video&maxResults=12&q=dog'
  )
  const [searchString, setSearchString] = useState('')
  const [nextPageToken, setNextPageToken] = useState('')
  const [prevPageToken, setPrevPageToken] = useState('')

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

    // console.log('apiUrl: ', apiUrl)
    // return ///breaking thing
    try {
      const resp = await axios.get(apiUrl)
      if (resp.status === 200) {
        setVideos(resp.data.items)
        if (resp.data.nextPageToken) {
          // console.log('nextPageToken: ', resp.data.nextPageToken)
          setNextPageToken(resp.data.nextPageToken)
        } else {
          setNextPageToken('')
        }
        if (resp.data.prevPageToken) {
          // console.log('prevPageToken: ', resp.data.prevPageToken)
          setPrevPageToken(resp.data.prevPageToken)
        } else {
          setPrevPageToken('')
        }
        // console.log(resp.data.items)
        // console.log(resp)
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
  const onClickNextPage = () => {
    // handle button click()
    getVideoDataFromApi('&pageToken=' + nextPageToken)
  }
  const onClickPrevPage = () => {
    // handle button click
    getVideoDataFromApi('&pageToken=' + prevPageToken)
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
  // useEffects

  useEffect(() => {
    // executes the Api call on page render
    getVideoDataFromApi('')
  }, [])

  return (
    <>
      <main>
        <section className="messageNextPrevPage">
          <button
            className="previous-page-button"
            disabled={!prevPageToken}
            onClick={onClickPrevPage}
          >
            <i className="fas fa-angle-double-left"></i>
          </button>
          <p className="resultsFor">
            Displaying Results for the category 'dog'
            {displaySearchQuery(searchString)}:
          </p>
          <button
            className="next-page-button"
            disabled={!nextPageToken}
            onClick={onClickNextPage}
          >
            <i className="fas fa-angle-double-right"></i>
          </button>
        </section>
        <section className="searchResultsSection">
          {videos.length === 0 && <p>Fetching videos...</p>}
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

export default HomePagination
