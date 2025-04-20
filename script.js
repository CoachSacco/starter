function handleSubmit() {
  const link = document.getElementById('videoLink').value.trim();
  const file = document.getElementById('fileUpload').files[0];
  const label = document.getElementById('clipLabel').value.trim();
  const status = document.getElementById('status');
  const uploadItems = document.getElementById('uploadItems');

  if (!link && !file) {
    status.textContent = "Please paste a link or upload a file.";
    return;
  }

  if (link) {
    status.textContent = `Link received (${label || 'No label'}). Ready for analysis.`;

    const newItem = document.createElement('li');
    newItem.innerHTML = `
      <span>🔗 ${label || 'Link'}: ${link}</span>
      <button class="analyze-btn">Analyze</button>
      <span class="analysis-status"></span>
    `;
    uploadItems.appendChild(newItem);

    const analyzeBtn = newItem.querySelector('.analyze-btn');
    const statusSpan = newItem.querySelector('.analysis-status');

    analyzeBtn.addEventListener('click', () => {
      analyzeBtn.disabled = true;
      statusSpan.textContent = ' ⏳ Processing...';
      setTimeout(() => {
        statusSpan.textContent = ' ✅ Analysis Ready';
        analyzeBtn.style.display = 'none';
      }, 3000);
    });

    return;
  }

  if (file) {
    const fileName = file.name.toLowerCase();
    const isZip = fileName.endsWith(".zip");

    const newItem = document.createElement('li');
    newItem.innerHTML = `
      <span>${isZip ? '📦' : '🎥'} ${label || file.name}</span>
      <button class="analyze-btn">Analyze</button>
      <span class="analysis-status"></span>
    `;

    uploadItems.appendChild(newItem);

    const analyzeBtn = newItem.querySelector('.analyze-btn');
    const statusSpan = newItem.querySelector('.analysis-status');

    analyzeBtn.addEventListener('click', () => {
      analyzeBtn.disabled = true;
      statusSpan.textContent = ' ⏳ Processing...';
      setTimeout(() => {
        statusSpan.textContent = ' ✅ Analysis Ready';
        analyzeBtn.style.display = 'none';
      }, 3000);
    });

    if (isZip) {
      status.textContent = `Zip file "${file.name}" uploaded (${label || 'No label'}). Auto-extraction and processing will be available soon.`;
    } else {
      status.textContent = `Clip "${file.name}" uploaded (${label || 'No label'}). Ready for analysis.`;
    }
  }
}
