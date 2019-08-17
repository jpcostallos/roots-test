import React from "react"
import { StaticQuery, graphql } from "gatsby"
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';

const Blogs = () => (

<StaticQuery
    query={graphql`
    {
      allAirtable(filter: {table: {eq: "Blogs"}}) {
        nodes {
          recordId
          data {
            title
            PostMarkdown
            image
            slug
          }
        }
      }
    }
    `}
    render={data => (
      <>
        <div className="container mx-auto">
            <h1 className="font-sans text-3xl text-gray-800 my-5">Blogs</h1>
            <div className="flex flex-wrap mb-4 bg-gray-200">
                {data.allAirtable.nodes.map((node, recordId) => 
                    <div key={recordId} className="w-1/3 bg-gray-400 my-5 p-10">
                      <h2>{node.data.title}</h2>
                      <p>
                      <div
                      dangerouslySetInnerHTML={{
                      __html: String(unified()
                      .use(markdown)
                      .use(html)
                      .processSync(node.data.PostMarkdown.split(/\s+/).slice(0,35).join(" ")))
                      }} />
                    </p>
                    </div>
                )}
            </div>
        </div>
      </>
    )}
  />
  )


  export default Blogs
