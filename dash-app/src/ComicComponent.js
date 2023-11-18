import React from "react";
import "./styles2.css";

const ComicComponent = (props) => {
  return (
    <div className="comic">
      <div className="panel">
        <p className="text top-left">Begin...</p>
        <p className="text bottom-right">...next photo</p>
      </div>
      <div className="panel"></div>
      <div className="panel"></div>
      <div className="panel">
        <p className="text bottom-right">...</p>
        <p className="speech">A speech bubble</p>
      </div>
      <div className="panel"></div>
      <div className="panel">
        <p className="text top-left">...</p>
      </div>
      <div className="panel">
        <p className="text bottom-right">IRON MAN</p>
      </div>
      <div className="panel"></div>
      <div className="panel"></div>
      <div className="panel">
        <p className="text bottom-right">THE END</p>
      </div>
    </div>
  );
};

export default ComicComponent;

// import React from "react";
// import "./styles2.css";

// const ComicComponent = (props) => {
//   return (
//     <div className="comic">
//       <div
//         className="panel"
//         style={{ backgroundImage: `url(${props.imageUrls[1]})` }}
//       >
//         <p className="text top-left">Begin...</p>
//         <p className="text bottom-right">...next photo</p>
//       </div>
//       <div
//         className="panel"
//         style={{ backgroundImage: `url(${props.imageUrls[2]})` }}
//       ></div>
//       <div
//         className="panel"
//         style={{ backgroundImage: `url(${props.imageUrls[3]})` }}
//       ></div>
//       <div
//         className="panel"
//         style={{ backgroundImage: `url(${props.imageUrls[4]})` }}
//       >
//         <p className="text bottom-right">...</p>
//         <p className="speech">A speech bubble</p>
//       </div>
//       <div
//         className="panel"
//         style={{ backgroundImage: `url(${props.imageUrls[5]})` }}
//       ></div>
//       <div
//         className="panel"
//         style={{ backgroundImage: `url(${props.imageUrls[6]})` }}
//       >
//         <p className="text top-left">...</p>
//       </div>
//       <div
//         className="panel"
//         style={{ backgroundImage: `url(${props.imageUrls[7]})` }}
//       ></div>
//       <div
//         className="panel"
//         style={{ backgroundImage: `url(${props.imageUrls[8]})` }}
//       ></div>
//       <div
//         className="panel"
//         style={{ backgroundImage: `url(${props.imageUrls[9]})` }}
//       ></div>
//       <div
//         className="panel"
//         style={{ backgroundImage: `url(${props.imageUrls[10]})` }}
//       >
//         <p className="text bottom-right">THE END</p>
//       </div>
//     </div>
//   );
// };

// export default ComicComponent;
