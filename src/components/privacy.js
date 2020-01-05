import React from "react";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";

function Privacy({children}) {
    return ( 
        <StaticQuery
        query={graphql`
            query PrivacyPageQuery {
                markdownRemark {
                    html
                    frontmatter {
                        date
                        title
                      }
                }
            }
        `}
        render={data => (
        <body className="leading-normal tracking-normal gradient">
            {children}
            <div className="pt-6">
                <section className="bg-white border-b py-8">
                    <div className="container max-w-5xl mx-auto m-8">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{data.markdownRemark.frontmatter.title}</h2>
                        <div className="w-full mb-4">	
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                        />
                    </div>
                </section>
            </div>
        </body>
        )}
        />
    )}


Privacy.propTypes = {
    children: PropTypes.node.isRequired
  };

export default Privacy;
