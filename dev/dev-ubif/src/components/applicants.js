import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Applicants = () => (

<StaticQuery
    query={graphql`
    {
        allAirtable(filter: {table: {eq: "Applicants"}}) {
            nodes {
                data {
                    Name
                    Why_do_you_want_to_work_with_us_
                    Email_Address
                }
            }
        }
    }
    `}
    render={data => (
      <>
        <div className="container mx-auto">
            <h1 className="font-sans text-lg text-blue-800 text-center">Applicants</h1>
            <div className="flex flex-wrap mb-4 bg-gray-200">
                {data.allAirtable.nodes.map(node => (
                    <div key={node.recordId} className="w-1/3 bg-gray-400 h-12 my-5">{node.data.Name}</div>
                ))}
            </div>
        </div>
      </>
    )}
  />
  )

  export default Applicants
