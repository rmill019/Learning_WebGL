// HelloPoint1.js
// Vertex shader program
var VSHADER_SOURCE =
"void main () {\n" +
" gl_Position = vec4 (0.0, 0.0, 0.0, 1.0);\n" +
" gl_PointSize = 10.0;\n" +
"}\n";

// Fragment shader program
var FSHADER_SOURCE =
"void main() {\n" +
" gl_FragColor = vec4 (1.0, 0.0, 0.0, 1.0);\n" + // Set the color
" }\n";

function main() {
  // Retrieve the canvas element
  var canvas = document.getElementById('webgl');

  // get the rendering context for WebGL
  var gl = getWebGLContext(canvas);
  if (!gl)
  {
    console.log("Failed to get the rendering context for WebGL");
    return;
  }

  // Initialize the shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE))
  {
    console.log("Failed to initialize shaders.");
    return;
  }

  // Set the color for clearing <canvas>
  gl.clearColor (0.0, 0.0, 0.0, 1.0);

  // Clear <canvas>
  gl.clear (gl.COLOR_BUFFER_BIT);
  // Draw a point
  gl.drawArrays (gl.Points, 0, 1);
}
