import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="0" y="295" rx="10" ry="10" width="280" height="26" /> 
    <rect x="0" y="338" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="448" rx="10" ry="10" width="95" height="30" /> 
    <rect x="129" y="439" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default MyLoader