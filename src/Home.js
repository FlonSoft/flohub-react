import React from 'react'
import './css/Home.css'
import Card, { ComicCard, VideoCard } from './components/Card'

export default function Home() {
  document.title = "flohub"
  return (
    <>
      <section>
        <h1 className='title'>Comics</h1>
        <div class="cards comic-cards">
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