import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSections.css';

const JURISDICTIONS = [
  {
    country: 'USA',
    patent: 'US15030190',
    bgImage: '/images/USA.webp',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g fillRule="evenodd">
          <g strokeWidth="1pt">
            <path fill="#bd3d44" d="M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z"></path>
            <path fill="#fff" d="M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V315H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0z"></path>
          </g>
          <path fill="#192f5d" d="M0 0h389.1v275.7H0z"></path>
        </g>
      </svg>
    )
  },
  {
    country: 'UK + EU',
    patent: 'EP14845005.9',
    bgImage: '/images/UK.webp',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#012169" d="M0 0h512v512H0z"></path>
        <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"></path>
        <path fill="#C8102E" d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"></path>
        <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z"></path>
        <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z"></path>
      </svg>
    )
  },
  {
    country: 'China',
    patent: 'CN201480069244.3',
    bgImage: '/images/china.jpg',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#ee1c25" d="M0 0h512v512H0z"></path>
        <circle cx="128" cy="128" r="48" fill="#ffde00" />
      </svg>
    )
  },
  {
    country: 'India',
    patent: '3278MUM2013',
    bgImage: '/images/india.jpg',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#f93" d="M0 0h512v170.7H0z"></path>
        <path fill="#fff" d="M0 170.7h512v170.6H0z"></path>
        <path fill="#128807" d="M0 341.3h512V512H0z"></path>
        <circle cx="256" cy="256" r="28" fill="#000088" />
      </svg>
    )
  }
];

export default function PatentMapSection() {
  return (
    <section id="reach" className="section-common">
      <div className="container">
        <div className="section-title-center">
          <span className="section-badge-purple">OUR IPR REACH</span>
          <h2 className="section-heading-white">
            We own the global IP rights of <br />RVCR - Climate tech
          </h2>
        </div>

        <div className="flipbox-grid">
          {JURISDICTIONS.map((item) => (
            <div key={item.country} className="flip-card" tabIndex={0}>
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <div className="flag-circle-icon">
                    {item.svg}
                  </div>
                  <h3 className="flip-card-title">{item.country}</h3>
                  <div className="flip-card-desc">
                    <strong>Patent No.</strong>
                    <span>{item.patent}</span>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="flip-card-back" 
                  style={{ backgroundImage: `url("${item.bgImage}")` }}
                >
                  <div className="flip-card-back-content">
                    <h3 className="flip-card-title">{item.country}</h3>
                    <div className="flip-card-desc">
                      <strong>Patent No.</strong>
                      <span>{item.patent}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reach-btn-wrap">
          <Link to="/patents" className="btn-gradient">
            <span>See all patents</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
