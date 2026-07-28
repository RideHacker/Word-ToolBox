document.addEventListener('DOMContentLoaded', () => {
  const mainInput = document.getElementById('mainText');

  if (!mainInput) return;

  // Real-time Metrics Counter
  mainInput.addEventListener('input', () => {
    const val = mainInput.value;
    const words = val.trim() ? val.trim().split(/\s+/).length : 0;
    
    const statWords = document.getElementById('statWords');
    const statChars = document.getElementById('statChars');
    const statSentences = document.getElementById('statSentences');
    const statRead = document.getElementById('statRead');

    if (statWords) statWords.innerText = words;
    if (statChars) statChars.innerText = val.length;
    if (statSentences) statSentences.innerText = val.trim() ? (val.match(/[.!?]+(\s|$)/g) || []).length : 0;
    if (statRead) statRead.innerText = `${Math.ceil(words / 200)}m`;
  });
});

// Text Transformation Actions
function transformText(type) {
  const mainInput = document.getElementById('mainText');
  if (!mainInput) return;

  let val = mainInput.value;
  if (!val) return;

  switch (type) {
    // Core Casing
    case 'upper':
      val = val.toUpperCase();
      break;
    case 'lower':
      val = val.toLowerCase();
      break;
    case 'title':
      val = val.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
      break;
    case 'sentence':
      val = val.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
      break;

    // Formatting & Cleaning
    case 'spaces':
      val = val.replace(/[ \t]+/g, ' ').trim();
      break;
    case 'breaks':
      val = val.replace(/[\r\n]+/g, ' ');
      break;
    case 'html':
      val = val.replace(/<[^>]*>/g, '');
      break;

    // Utilities & Line Tools
    case 'sort':
      val = val.split(/\r?\n/).sort((a, b) => a.localeCompare(b)).join('\n');
      break;
    case 'trim':
      val = val.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0).join('\n');
      break;
    case 'bullets':
      val = val.split(/\r?\n/).map(line => line.trim() ? `• ${line.replace(/^•\s*/, '')}` : line).join('\n');
      break;
    case 'base64':
      try {
        val = btoa(val) === val ? atob(val) : btoa(val);
      } catch (e) {
        val = btoa(val);
      }
      break;
    case 'duplicates':
      val = Array.from(new Set(val.split(/\r?\n/))).join('\n');
      break;
    case 'reverse':
      val = val.split('').reverse().join('');
      break;
  }

  mainInput.value = val;
  mainInput.dispatchEvent(new Event('input'));
}

// Copy Text Trigger
function copyMainText() {
  const mainInput = document.getElementById('mainText');
  if (!mainInput || !mainInput.value) return;

  navigator.clipboard.writeText(mainInput.value);
  alert('Text copied to clipboard!');
}

// Clear All Trigger
function clearMainText() {
  const mainInput = document.getElementById('mainText');
  if (!mainInput) return;

  mainInput.value = '';
  mainInput.dispatchEvent(new Event('input'));
}
  

// Lower Segment : Code for handling the lower segment of the application, including additional text transformations and utilities.

// Utility Functions
// 1.
function copyText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = (el.value !== undefined) ? el.value : (el.innerText || el.textContent);
  if (!text || !text.trim()) return alert('Nothing to copy!');

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => alert('Copied!')).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy') ? alert('Copied!') : alert('Failed to copy.');
  } catch (err) {
    alert('Copy failed: ' + err);
  } finally {
    document.body.removeChild(ta);
  }
}

function clearText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (el.value !== undefined) el.value = '';
  if (el.innerHTML !== undefined) el.innerHTML = '';
  if (typeof el.focus === 'function') el.focus();
}

// Tool Specific Logic
function runFindReplace() {
  const input = document.getElementById('frInput');
  const findVal = document.getElementById('frFind').value;
  const replaceVal = document.getElementById('frReplace').value;

  if (!input || !input.value || !findVal) return;

  const escapedFind = findVal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escapedFind, 'gi');

  input.value = input.value.replace(regex, replaceVal);
}