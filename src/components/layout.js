import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Footer from "./footer"

import InTheClear from "../images/InTheClear.png";
import DestinationsSvg from "../images/undraw_destinations_fpv7.svg"
import MapSvg from "../images/undraw_destinations_fpv7.svg"
import ListSvg from "../images/undraw_note_list_etto.svg"
import SignSvg from "../images/undraw_road_sign_mfpo.svg"

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              app,
              website,
              github,
              linkedin,
              contact
            }
          }
        }
      `}
      render={data => (
        <body className="leading-normal tracking-normal text-white gradient">

            {children}

            {/* Hero */}
            <div className="pt-6">

              <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                  <p className="uppercase tracking-loose w-full">iOS and Web App</p>
                  <h1 className="my-4 text-5xl font-bold leading-tight">In The Clear</h1>
                  <p className="leading-normal text-2xl mb-8">
                    {data.site.siteMetadata.title} - an app designed to alleviate the pain of unexpectadly having to travel through unfavorable weather conditions
                  </p>

                  <div className="row">
                      <a type="submit" target="_blank" href={data.site.siteMetadata.app} className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">iOS App</a>
                      <a type="submit" target="_blank" href={data.site.siteMetadata.website} className="ml-2 mx-auto hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Web App</a>
                  </div>

                </div>

                <div className="w-full md:w-3/5 py-6 pb-10 text-center">
                  <img className="w-full md:w-4/5 z-50" src={InTheClear} />
                </div>
                
              </div>

            </div>

            {/* Waves SVG */}
            <div class="relative -mt-12 lg:-mt-24">
              <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
              </g>
              </svg>
            </div>

            {/* Alternate features */}
            <section className="bg-white border-b py-8">
              <div className="container max-w-5xl mx-auto m-8">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{data.site.siteMetadata.title}</h2>
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
              
                <div className="flex flex-wrap">
                  <div className="w-5/6 sm:w-1/2 p-6">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Prepare Better</h3>
                    <p className="text-gray-600 mb-8">Driving through snow storms or thunderstorms can be stressful. In The Clear uses Dark Sky's dead accurate weather service so you can be certain the weather conditions you see, will be the conditions you can expect during your travels<br /><br />
                    
                    Images from: <a className="text-orange-500 underline" href="https://undraw.co/">undraw.co</a></p>
                    
                  </div>
                  <div className="w-full sm:w-1/2 p-6">
                    <img className="w-full sm:h-64 mx-auto" xmlns="http://www.w3.org/2000/svg" src={SignSvg} />
                  </div>
                </div>
                
                
                <div className="flex flex-wrap flex-col-reverse sm:flex-row">	
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img className="w-5/6 sm:h-64 mx-auto" xmlns="http://www.w3.org/2000/svg" src={DestinationsSvg} />
                  </div>
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Select Trip Stops</h3>
                      <p className="text-gray-600 mb-8">You are able to select your own trip stops, like an overnight hotel stay, visit to your long lost cousin, etc, and select the time that you plan on leaving.<br /><br />

                      Images from: <a className="text-orange-500 underline" href="https://undraw.co/">undraw.co</a></p>

                    </div>
                  </div>
                </div>


                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">See The Cities You'll Be Traveling Through</h3>
                    <p className="text-gray-600 mb-8">Have you ever planned on stopping in a city only to find out its raining? With In The Clear, you are able to see a list of cities you will be traveling through along with the weather and conditions.<br /><br />
                    
                    Images from: <a className="text-orange-500 underline" href="https://undraw.co/">undraw.co</a></p>
                    
                  </div>
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img className="w-full sm:h-64 mx-auto" src={ListSvg}/>
                  </div>
                </div>
                
                
                <div className="flex flex-wrap flex-col-reverse sm:flex-row">	
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img className="w-5/6 sm:h-64 mx-auto" src={MapSvg} />
                  </div>
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Export to Google Maps</h3>
                      <p className="text-gray-600 mb-8">Who likes having to input information twice? With In The Clear, you are able to export your trip (stops included) to Google Maps.<br /><br />

                      Images from: <a className="text-orange-500 underline" href="https://undraw.co/">undraw.co</a></p>

                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Title cards */}
            <section className="bg-white border-b py-8">
              
              <div className="container mx-auto flex flex-wrap pt-4 pb-12">
              
                <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">Updates</h3>
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
              
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink mb-4 mt-4">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <a href="https://www.gatsbyjs.org/" className="flex flex-wrap no-underline hover:no-underline">
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">iOS 13 Supprt</p>
                      <div className="w-full font-bold text-xl text-gray-800 px-6">Version 2.1</div>
                      <p className="text-gray-800 text-base px-6 mb-5">
                        Support for Dark Mode in iOS 13 was added. If you have iOS 13.0+, you will definetly want this update!
                      </p>
                    </a>
                  </div>
                </div>
                
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink mb-4 mt-4">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <a href="https://tailwindcss.com/" className="flex flex-wrap no-underline hover:no-underline">
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">Trip Stops</p>
                      <div className="w-full font-bold text-xl text-gray-800 px-6">Version 2.0</div>
                      <p className="text-gray-800 text-base px-6 mb-5">
                        You are now able to select the places you are planning on stopping at, and select a time in which you plan on leaving.
                      </p>
                      <p className="text-gray-800 text-base px-6 mb-5">
                        Redesign of the trip time and distance label so it not only looks better, but also tells you more information.
                      </p>
                      <p className="text-gray-800 text-base px-6 mb-5">
                        We also fixed some design issues that caused the app to render awkwardly on the iPhone SE.
                      </p>
                    </a>
                  </div>
                </div>
                       
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink mb-4 mt-4">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">Starting Times and Night Time</p>
                      <div className="w-full font-bold text-xl text-gray-800 px-6">Version 1.2</div>
                      <p className="text-gray-800 text-base px-6 mb-5">
                        You are now able to select your own starting time, allowing you to better plan ahead.
                      </p>
                      <p className="text-gray-800 text-base px-6 mb-5">
                        Night Time icons were added. If you traveling during the wee hours of the night, the new night time icons along with a darker colored cell will be shown.
                      </p>
                    </a>
                  </div>
                </div>
                
                
              </div>

            </section>

            {/* Pricing cards */}
            <section className="bg-gray-100 py-8">
              
              <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">

                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Pricing</h1>
                <div className="w-full mb-4">	
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">               
                  <div className="flex flex-col w-5/6 lg:w-1/3 mr-4 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                      <div className="w-full p-8 text-3xl font-bold text-center">iOS App + Web</div>
                      <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                      <ul className="w-full text-center text-base font-bold">
                        <li className="border-b py-4">Plan your trips from your iPhone or iPad</li>
                        <li className="border-b py-4">Plan your trips from the Web</li>
                        <li className="border-b py-4">Ad-free Web App Experience</li>
                      </ul>					
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                      <div className="w-full pt-6 text-4xl font-bold text-center">$1.99</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col w-5/6 lg:w-1/3 rounded-lg ml-4 bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                      <div className="w-full p-8 text-3xl font-bold text-center">Web</div>
                      <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                      <ul className="w-full text-center text-base font-bold">
                        <li className="border-b py-4">Plan your trips from the Web</li>
                        <li className="border-b py-4">Ads will be shown</li>
                      </ul>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                      <div className="w-full pt-6 text-4xl font-bold text-center">Free</div>
                    </div>
                  </div>

                </div>
                
              </div>
                
            </section>

            {/* Waves SVG */}
            <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                  <g className="wave" fill="#f8fafc">
                    <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                  </g>
                  <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                    <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                      <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                      <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                      <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>

            {/* CTA block */}
            <section className="container mx-auto text-center py-6 mb-12">

              <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Ready to Travel Stress Free?</h1>
              <div className="w-full mb-4">	
                <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
              </div>

              <h3 className="my-4 text-3xl leading-tight">Download In The Clear!</h3>	

              <div className="row">
                <a type="submit" target="_blank" href={data.site.siteMetadata.app} className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">iOS App</a>
                <a type="submit" target="_blank" href={data.site.siteMetadata.website} className="ml-2 mx-auto hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Web App</a>
              </div>

            </section>
            {/* Footer */}
            <Footer data={data.site.siteMetadata} /> 
        </body>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
