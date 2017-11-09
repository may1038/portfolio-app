import React, { Component } from "react"

class Photography extends Component {
  render() {
    return (
      <div>
        <div className="zoo">
          <div className="photosWrapper">
            {/*Zoo*/}
            {/*Zoo*/}
            {/*Zoo*/}
            {/*Zoo*/}
            <div className="photos">
              <h1 className="photography-title">Photography</h1>
              <table className="photosTable">
                <h1 className="photoTitle">A Day at the Zoo</h1>
                <h2 className="photoTitle">2017</h2>
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/14vaDOt.jpg"
                  alt=""
                />
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/vmStteM.jpg"
                  alt=""
                />
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/XpG3Jqy.jpg"
                  alt=""
                />
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/gZJaurg.jpg"
                  alt=""
                />
              </table>
            </div>
            {/*Car*/}
            {/*Car*/}
            {/*Car*/}
            {/*Car*/}
            <div className="photos">
              <table className="photosTable">
                <h1 className="photoTitle">WRX | Colorado</h1>
                <h2 className="photoTitle">2015</h2>
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/h1LRLPv.jpg"
                  alt=""
                />
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/XUczczr.jpg"
                  alt=""
                />
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/CbqJAsR.jpg"
                  alt=""
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Photography
