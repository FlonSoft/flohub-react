import React from 'react'
import './css/Home.css'
import { ComicCard, VideoCard } from './components/Card'

export default function Home() {
  document.title = "flohub"
  return (
    <>
      <section>
        <h1 className='title'>Comics</h1>
        <div className="cards comic-cards">
          <ComicCard></ComicCard>
        </div>
      </section>
      <section>
        <h1 className='title'>Videos</h1>
        <div className="cards video-cards">
          <VideoCard></VideoCard>
        </div>
      </section>
    </>
  )
}