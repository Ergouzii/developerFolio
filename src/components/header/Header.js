import React from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import {
  greeting,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  twitterDetails,
} from '../../portfolio';

function Header() {
  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          {educationInfo.viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {workExperiences.viewExperiences && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {openSource.viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {bigProjects.viewBigProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {achievementSection.viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {blogSection.viewBlogs && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {talkSection.viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
