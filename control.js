"use strict";
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
// creating canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADASS";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 2;

//Global Var
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

//drwing Method
const drawing = (e) => {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
  if (direction) ctx.lineWidth++;
  if (!direction) ctx.lineWidth--;
};
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
