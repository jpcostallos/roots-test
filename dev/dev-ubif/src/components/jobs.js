import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Jobs = () => (

<StaticQuery
    query={graphql`
    {
        allAirtable(filter: {table: {eq: "Positions"}}) {
          nodes {
            recordId
            data {
              Name
              Description
              Required_Experience
              Applying_for_position {
                recordId
                data {
                  Name
                }
              }
            }
          }
        }
    }
    `}    
    render={data => (
      <>
        <div className="container mx-auto">
          <h1 className="font-sans text-3xl text-gray-800 my-5">Jobs</h1>
          <div className="flex flex-wrap mb-4 bg-gray-200">
              {data.allAirtable.nodes.map((node, recordId) => 
                  <div key={recordId} className="w-1/3 bg-gray-400 my-5 p-10">
                    <h2>Job Title: {node.data.Name}</h2>
                    <h3>People Applying For this Job:</h3>

                    <ul>
                      {node.data.Applying_for_position.map((node, recordId) => 
                      <li key={recordId}>{node.data.Name}</li>
                      )}
                    </ul>
                  </div>
              )}
          </div>
        </div>
      </>
    )}
  />
  )


  export default Jobs
