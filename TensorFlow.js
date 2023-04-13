// Load the model
const model = await tf.loadGraphModel('model.json');

// Load the image
const img = new Image();
img.src = 'ball.jpg';
await img.decode();

// Create a tensor from the image
const tensor = tf.browser.fromPixels(img);

// Resize the tensor to match the input size of the model
const resized = tf.image.resizeBilinear(tensor, [224, 224]);

// Normalize the pixel values
const offset = tf.scalar(255);
const normalized = resized.div(offset);

// Add a batch dimension to the tensor
const batched = normalized.expandDims(0);

// Make predictions with the model
const predictions = await model.predict(batched).data();

// Get the coordinates of the ball
const x1 = predictions[0] * img.width;
const y1 = predictions[1] * img.height;
const x2 = predictions[2] * img.width;
const y2 = predictions[3] * img.height;

// Draw a bounding box around the ball
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.drawImage(img, 0, 0);
ctx.beginPath();
ctx.rect(x1, y1, x2 - x1, y2 - y1);
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.stroke();
