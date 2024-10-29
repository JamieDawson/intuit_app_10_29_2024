import React from "react";

const ViewMoreButton = ({ viewMore, setViewMore }) => {
  return <button onClick={() => setViewMore(!viewMore)}>View more</button>;
};

export default ViewMoreButton;

//viewMore={viewMore} setViewMore={setViewMore}
