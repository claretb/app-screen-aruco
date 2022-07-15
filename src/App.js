import './App.css';
import aruco819 from './aruco-819.svg';
import aruco273 from './aruco-273.svg';
import aruco61 from './aruco-61.svg';
import aruco922 from './aruco-922.svg';
import React, { useState, useEffect } from 'react';

function App() {
  // Hard coded canvas size. It can be changed as desired.
  var canvasWidth = window.innerWidth < window.innerHeight ? window.innerWidth - 100: window.innerHeight - 100;
  var canvasHeight = window.innerWidth < window.innerHeight ? window.innerWidth - 100: window.innerHeight - 100;

  function initAppCanvas() {
    var canvas = document.getElementById("appCanvas");
    var ctx = canvas.getContext("2d");

    var fontSize = 20;

    ctx.textAlign = "center";
    ctx.font = "20px Arial";

    ctx.fillText("This is your canvas. You can run your app in this area.", canvasWidth / 2, canvasHeight / 2 - fontSize);
    ctx.fillText("It is currently" + canvasWidth + "x" + canvasHeight + "but you can change it however you want.", canvasWidth / 2, canvasHeight / 2);
    ctx.fillText("Aruco markers can adapt their positions according to your sizes.", canvasWidth / 2, canvasHeight / 2 + fontSize);

  }

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
    initAppCanvas();
    initArucoCanvas();
  }, [])

  window.addEventListener('resize', () => {
    var appCanvas = document.getElementById("appCanvas");
    var arucoCanvas = document.getElementById("arucoCanvas");
    canvasWidth = window.innerWidth < window.innerHeight ? window.innerWidth - 100: window.innerHeight - 100;
    canvasHeight = window.innerWidth < window.innerHeight ? window.innerWidth - 100: window.innerHeight - 100;
    appCanvas.width = canvasWidth;
    appCanvas.height = canvasHeight;
    arucoCanvas.width = canvasWidth + 100;
    arucoCanvas.height = canvasHeight + 100;

    initAppCanvas();
    initArucoCanvas();
  })

  return (
    <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      <div style={{ position: "absolute", transform: "translate(-50%, -50%)"}}>
        <canvas
          id="appCanvas"
          width={canvasWidth}
          height={canvasHeight}
          style={{ backgroundColor: "#ede4c5" }}
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
