<!DOCTYPE html>
<head>
  <title>Foosball training from video</title>
  <style>
canvas {
  border: solid 2px;
}
  </style>
  <script>
    // Load the model
    // Load the MobileNetV2 model
    const model = await tf.loadGraphModel('https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/4');


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
    const xCoord = (x1 + x2) / 2
    const yCoord = (y1 + y2) / 2
    console.log("x = " + xCoord + ", y = " + yCoord)

    // Draw a bounding box around the ball
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.rect(x1, y1, x2 - x1, y2 - y1);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.stroke();
  </script>
<body>
    <center>
        <canvas id="canvas"></canvas>
    </center>
</body>
</html>
