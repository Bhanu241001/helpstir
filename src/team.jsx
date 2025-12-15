import React from 'react'

const team = () => {
  return (
      <section class="team">
        <div class="team__header">
          <h2 class="team__title">Our Team</h2>
        </div>
        <div class="team__list-container">
          <ul class="team__list">
            <li class="team-member">
              <img
                class="team-member__image"
                src="/teammates/alice.jpg"
                alt="Photo of Alice"
              />
              <div class="team-member__details">
                <h4 class="team-member__name">Alice</h4>
                <span class="team-member__role">CEO</span>
              </div>
            </li>
            <li class="team-member">
              <img
                class="team-member__image"
                src="/teammates/piyush.jpg"
                alt="Photo of Piyush"
              />
              <div class="team-member__details">
                <h4 class="team-member__name">Piyush</h4>
                <span class="team-member__role">Engineer</span>
              </div>
            </li>
            <li class="team-member">
              <img
                class="team-member__image"
                src="/teammates/Shashank.jpg"
                alt="Photo of Shashank"
              />
              <div class="team-member__details">
                <h4 class="team-member__name">Shashank</h4>
                <span class="team-member__role">Design</span>
              </div>
            </li>
            <li class="team-member">
              <img
                class="team-member__image"
                src="/teammates/Ben.jpg"
                alt="Photo of Ben"
              />
              <div class="team-member__details">
                <h4 class="team-member__name">Ben</h4>
                <span class="team-member__role">Marketing</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default team