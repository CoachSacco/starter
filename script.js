function handleSubmit() {
  const link = document.getElementById('videoLink').value.trim();
  const file = document.getElementById('fileUpload').files[0];
  const label = document.getElementById('clipLabel').value.trim();
  const status = document.getElementById('status');

  if (!link && !file) {
    status.textContent = "Please paste a link or upload a file.";
    return;
  }

  if (link) {
    status.textContent = `Link received (${label || 'No label'}). Ready for analysis.`;
    return;
  }

  if (file) {
    const fileName = file.name.toLowerCase();
    const isZip = fileName.endsWith(".zip");

    if (isZip) {
      status.textContent = `Zip file "${file.name}" uploaded (${label || 'No label'}). Auto-extraction and processing will be available soon.`;
    } else {
      status.textContent = `Clip "${file.name}" uploaded (${label || 'No label'}). Ready for analysis.`;
    }
  }
}
.upload-list {
  margin-top: 30px;
  padding: 20px;
  background: #1c1c1c;
  border-radius: 10px;
  color: #eee;
}

.upload-list h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

#uploadItems li {
  padding: 6px 0;
  border-bottom: 1px solid #444;
  font-size: 15px;
}
