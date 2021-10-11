var mouseevent="";
var lastX=0;
var lastY=0;
var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var colour="goldenrod";
var widthline=2;
// gap
canvas.addEventListener("mousedown",mymousedown);
// gap again 
function mymousedown(e) {
    mouseevent="mouse_down";

}
// gaps everwhere
canvas.addEventListener("mouseup",mymouseup);
// ahhh
function mymouseup(e) {
    mouseevent="mouse_up";
}
// sghjiuyfxdfb
canvas.addEventListener("mouseleave",mymouseleave);// my mouse left me im sad

// ahhh
function mymouseleave(e) {
    mouseevent="mouse_leave";
}

// sghjiuyfxdfb
canvas.addEventListener("mousemove",mymousemove);// mouses can move now coding has reached greater heights

// ahhh
function mymousemove(e) {
      current_x=e.clientX-canvas.offsetLeft;
      // yp gap
      current_y=e.clientY-canvas.offsetTop;

      if(mouseevent=="mouse_down") {
          ctx.beginPath();
          ctx.strokeStyle=colour;
          ctx.lineWidth=widthline;
          // console gap
          ctx.arc(current_x,current_y,40,0,2*Math.PI);
          ctx.stroke();
      }
      
       lastX = current_x;
       lastY = current_y;
      
}


