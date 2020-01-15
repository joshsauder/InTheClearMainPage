import React from "react";
import InTheClearFill from "../images/InTheClearFill.png";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

function Footer(props) {

    return (
        <StaticQuery 
            query={graphql`
                query footerQuery {
                    file(relativePath: { regex: "/InTheClearFill.png/" }) {
                        childImageSharp {
                        sizes(maxWidth: 1240 ) {
                            ...GatsbyImageSharpSizes
                        }
                        }
                    }
                }
                `
            }
        render={data => (
        <footer className="bg-white">

            <div className="container mx-auto  px-8">
                <div className="w-full flex flex-col md:flex-row py-6">             
                    <div className="flex-1 mb-6">           
                        <a className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="/"> 
                            <Img className="w-full md:w-4/5 z-50" sizes={data.file.childImageSharp.sizes} />
                        </a>
                    </div>    
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Links</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href={props.data.app} target="_blank" className="no-underline hover:underline text-gray-800 hover:text-orange-500">iOS App</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href={props.data.contact} className="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="/privacy" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Connect</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href={props.data.linkedin} target="_blank" className="no-underline hover:underline text-gray-800 hover:text-orange-500">LinkedIn</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href={props.data.github} target="_blank" className="no-underline hover:underline text-gray-800 hover:text-orange-500">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
        )}
        />
    )
}

export default Footer;
