// // import React from "react";
// // import "./home.css";

// // function Home() {
// //   return (
// //     <div id="section1" class="section">
// //   <div class="contents">
// //     <div class="left-side-contents">
// //       <div class="left-side-content-items">I Have not failed.</div>
// //       <div class="left-side-content-items">
// //         I've just found 10,000 ways that won't work.
// //       </div>
// //       <div class="left-side-content-items">-Thomas Edison</div>
// //     </div>
// //     <div class="right-side-contents">
// //       <div class="right-side-content-items">Zimmer Kennedy</div>
// //       <div class="right-side-content-items">Full Stack Developer</div>
// //       <div class="right-side-content-items">
// //         Creating Solutions, One Code at a Time
// //       </div>
// //     </div>
// //   </div>
// //   <div class="pernLogo">
// //     <div class="logo-container">
// //       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
// //         <path
// //           d="M25,0 L100,100 L75,175 L0,75 Z"
// //           stroke="#ffffff"
// //           stroke-width="10"
// //           fill="none"
// //         />
// //       </svg>
// //     </div>
// //   </div>
// // </div>
// //   );
// // }

// // export default Home;

// import React, { useEffect } from "react";
// import "./home.css";

// function Home() {
//   useEffect(() => {
//     window.addEventListener("scroll", function () {
//       if (window.scrollY > 0) {
//         document
//           .querySelector(".logo-container svg path")
//           .classList.add("fill-screen");
//       }
//     });
//   }, []);

//   return (
//     <div id="section1" className="section">
//       <div className="contents">
//         <div className="left-side-contents">
//           <div className="left-side-content-items">I Have not failed.</div>
//           <div className="left-side-content-items">
//             I've just found 10,000 ways that won't work.
//           </div>
//           <div className="left-side-content-items">-Thomas Edison</div>
//         </div>
//         <div className="right-side-contents">
//           <div className="right-side-content-items">Zimmer Kennedy</div>
//           <div className="right-side-content-items">Full Stack Developer</div>
//           <div className="right-side-content-items">
//             Creating Solutions, One Code at a Time
//           </div>
//         </div>
//       </div>
//       <div className="pernLogo">
//         <div className="logo-container">
//           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M25,0 L100,100 L75,175 L0,75 Z"
//               stroke="#ffffff"
//               strokeWidth="10"
//               fill="none"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React, { useEffect } from "react";
import "./home.css";

function Home() {
  return (
    <div className="section">
      <div className="contents">
        <div className="left-side-contents">
          <div className="left-side-content-items">I Have not failed.</div>
          <div className="left-side-content-items">
            I've just found 10,000 ways that won't work.
          </div>
          <div className="left-side-content-items">-Thomas Edison</div>
        </div>
        <div className="right-side-contents">
          <div className="right-side-content-items">Zimmer Kennedy</div>
          <div className="right-side-content-items">Full Stack Developer</div>
          <div className="right-side-content-items">
            Creating Solutions, One Code at a Time
          </div>
        </div>
      </div>
      <div className="pernLogo">
        <div className="logo-container">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25,0 L100,100 L75,175 L0,75 Z"
              stroke="#ffffff"
              strokeWidth="10"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;