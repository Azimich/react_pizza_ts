import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="125" r="125" /> 
    <rect x="0" y="280" rx="10" ry="10" width="280" height="26" /> 
    <rect x="0" y="325" rx="10" ry="10" width="280" height="100" /> 
    <rect x="0" y="450" rx="10" ry="10" width="95" height="30" /> 
    <rect x="115" y="440" rx="25" ry="25" width="165" height="45" />
  </ContentLoader>
)

export default MyLoader