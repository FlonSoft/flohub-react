import React from 'react'

function CardAction() {
  return (
    <div className="card-hover-overlay">
      <img className="icon" src="https://cdn.flolon.dev/assets/icons/more_vert_white_24dp.svg" alt="Video thumbnail"></img>
    </div>
  )
}

export function ComicCard() {
  return (
    <div className='card'>
      <img src="https://i.imgur.com/tqnIraT.jpeg" alt="Cover"></img>
      <div className="meta">
        <div className="card-title">
          <a href="#">&lt;cocoshark&gt;</a>
        </div>
        <div className="flex-center author/">
          <a href="#">qundium</a>
        </div>
        <div className="tags">
          <a href="#">MM</a>
          <a href="#">bdsm</a>
        </div>
      </div>
      <CardAction></CardAction>
    </div>
  )
}

export function VideoCard() {
  return (
    <div className="card">
      <img src="https://i.imgur.com/NntiEDF.jpeg" alt="Video thumbnail"></img>
      <div className="card-overlay">
        <span className="time">13:33</span>
      </div>
      <CardAction></CardAction>
      <div className="meta">
        <div className="card-title">
          <a href="#">Sucked, fucked and buzzed by Shun &lt;3</a>
        </div>
        <div className="flex-center author">
          <a href="#">BigPawbs</a>
        </div>
        <div className="flex-end">
          <div className="tags">
            <a href="#">MM</a>
            <a href="#">bdsm</a>
            <a href="#">handjob</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Card(props) {
  return (
    <div>Card</div>
  )
}