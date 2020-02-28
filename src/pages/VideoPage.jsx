import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import CastMemberListItem from '../components/CastMemberListItem'

const VideoPage = props => {
  // Start of url for images in full size
  // const imageOriginal = 'https://image.tmdb.org/t/p/original'

  // // Place the data returned from the API here.
  // const [showData, setShowData] = useState({
  //   credits: {
  //     cast: [],
  //     crew: [],
  //   },
  // })

  // // Construct the API url from the show ID passed from the call
  // const apiUrl =
  //   'https://api.themoviedb.org/3/tv/' +
  //   props.match.params.showId +
  //   '?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&append_to_response=credits'

  // // Function to call the API and populate the returned data
  // const getShowInfo = async () => {
  //   const resp = await axios.get(apiUrl)
  //   setShowData(resp.data)
  //   console.log(resp)
  // }

  // // Execute api call function when the page is loaded.
  // useEffect(() => {
  //   getVideoInfo()
  // }, [])

  return (
    <>
      {/* <header className="tvShowHeader">
        <h1 className="tvShowTitle">{showData.name}</h1>
      </header>
      <main>
        <section className="detailTVShowContainer">
          <section className="detailPosterContainer">
            <img
              className="showImage"
              src={imageOriginal + showData.backdrop_path}
              alt={showData.name + ' TV Show Title Poster'}
            />
          </section>
          <section className="overviewSection">
            <h1 className="overviewH1">Overview</h1>
            <p>{showData.overview}</p>
          </section>
          <section className="castSection">
            <h1 className="castH1">Cast</h1>
            <ul className="charactersUL">
              {showData.credits.cast.map(actor => {
                return <CastMemberListItem key={actor.id} actor={actor} />
              })}
            </ul>
          </section>
        </section>
      </main> */}
    </>
  )
}

export default VideoPage
