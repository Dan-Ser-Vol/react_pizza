import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="143" r="139" />
    <rect x="-1" y="297" rx="10" ry="10" width="280" height="26" />
    <rect x="0" y="334" rx="10" ry="10" width="280" height="75" />
    <rect x="155" y="420" rx="20" ry="20" width="125" height="40" />
    <rect x="0" y="429" rx="10" ry="10" width="122" height="19" />
  </ContentLoader>
);

export default Skeleton;
