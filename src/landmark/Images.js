import React from "react";

function Images(props) {
  let empty = "";
  if (props.images.length === 0) {
    empty = `1017ea7ff3977154af6a703827b92d8cc37`;
  } else {
    empty = props.images[0].uuid;
  }

  const url = `https://tih-api.stb.gov.sg/media/v1/download/uuid/${empty}?apikey=mkG9xqF6crEIlLPG1t0hIvdsdn4qQAKz`;
  // console.log("this is url", url);

  return (
    <div>
      <img className="images" src={url} alt="" width="300px" height="300px" />
    </div>
  );
}

export default Images;
