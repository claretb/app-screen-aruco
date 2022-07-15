import './App.css';
import aruco819 from './aruco-819.svg';
import aruco273 from './aruco-273.svg';
import aruco61 from './aruco-61.svg';
import aruco922 from './aruco-922.svg';
import carGif from './car.gif';
import React, { useState, useEffect } from 'react';

function App() {
  // Hard coded canvas size. It can be changed as desired.
  var canvasWidth = window.innerWidth < window.innerHeight ? window.innerWidth - 100: window.innerHeight - 100;
  var canvasHeight = window.innerWidth < window.innerHeight ? window.innerWidth - 100: window.innerHeight - 100;

  function initArucoCanvas() {
    var canvas = document.getElementById("arucoCanvas");
    var ctx = canvas.getContext("2d");

    var aruco819img = new Image();
    aruco819img.onload = function () {
      ctx.drawImage(aruco819img, 5, 5, 100, 100);
    }
    aruco819img.src = aruco819;

    var aruco273img = new Image();
    aruco273img.onload = function () {
      ctx.drawImage(aruco273img, canvasWidth - 5, 5, 100, 100);
    }
    aruco273img.src = aruco273;

    var aruco61img = new Image();
    aruco61img.onload = function () {
      ctx.drawImage(aruco61img, 5, canvasHeight - 5, 100, 100);
    }
    aruco61img.src = aruco61;

    var aruco922img = new Image();
    aruco922img.onload = function () {
      ctx.drawImage(aruco922img, canvasWidth - 5, canvasHeight - 5, 100, 100);
    }
    aruco922img.src = aruco922;
  }

  useEffect(() => {
    initArucoCanvas();
  }, [])

  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  window.addEventListener('resize', () => {
    var arucoCanvas = document.getElementById("arucoCanvas");
    canvasWidth = window.innerWidth < window.innerHeight ? window.innerWidth - 100: window.innerHeight - 100;
    canvasHeight = window.innerWidth < window.innerHeight ? window.innerWidth - 100: window.innerHeight - 100;
    arucoCanvas.width = canvasWidth + 100;
    arucoCanvas.height = canvasHeight + 100;

    initArucoCanvas();
  })

  return (
    <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      <div style={{  position: "absolute", transform: "translate(-50%, -50%)"}}>
        <img
          src={carGif}
          width={canvasWidth * 3 / 4}
          height={canvasHeight * 3 / 4}
        />
      </div>
      <div style={{ position: "absolute", transform: "translate(-50%, -50%)"}}>
        <canvas
          id="arucoCanvas"
          width={canvasWidth + 100}
          height={canvasHeight + 100}
          style={{ backgroundColor: "transparent" }}
        />
      </div>
    </div>
  );
}

export default App;
