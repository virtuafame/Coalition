const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const preview = document.getElementById('preview');
const captureBtn = document.getElementById('captureBtn');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    alert("Camera access failed: " + err.message);
  });

captureBtn.addEventListener('click', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const imageData = canvas.toDataURL('image/png');
  preview.src = imageData;
  preview.style.display = 'block';

  // Optional: Upload to Dropbox or endpoint here

  // Redirect to Wasmer secure login
  window.location.href = "https://virtuafame.wasmer.app/secure-login";
});
