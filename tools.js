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


//2.
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

function runSort(type) {
  const input = document.getElementById('sortInput');
  if (!input || !input.value) return;

  let lines = input.value.split(/\r?\n/);

  switch (type) {
    case 'az': lines.sort((a, b) => a.localeCompare(b)); break;
    case 'za': lines.sort((a, b) => b.localeCompare(a)); break;
    case 'length-asc': lines.sort((a, b) => a.length - b.length); break;
    case 'reverse': lines.reverse(); break;
  }

  input.value = lines.join('\n');
}

// 3.
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

function runLorem() {
  const count = parseInt(document.getElementById('loremCount').value) || 3;
  const type = document.getElementById('loremType').value;
  const output = document.getElementById('loremOutput');

  const wordsList = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", 
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", 
    "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud", 
    "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo", "consequat"
  ];

  let result = [];

  if (type === 'words') {
    for (let i = 0; i < count; i++) {
      result.push(wordsList[i % wordsList.length]);
    }
    output.value = result.join(' ');
  } else if (type === 'sentences') {
    for (let i = 0; i < count; i++) {
      let sentenceLen = 6 + (i % 5);
      let sentenceWords = [];
      for (let j = 0; j < sentenceLen; j++) {
        sentenceWords.push(wordsList[(i * 4 + j) % wordsList.length]);
      }
      let sentence = sentenceWords.join(' ');
      result.push(sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.');
    }
    output.value = result.join(' ');
  } else {
    for (let i = 0; i < count; i++) {
      result.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    }
    output.value = result.join('\n\n');
  }
}

//4.
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

function runShuffle(type) {
  const input = document.getElementById('shuffleInput');
  if (!input || !input.value) return;

  if (type === 'lines') {
    let lines = input.value.split(/\r?\n/);
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    input.value = lines.join('\n');
  } else if (type === 'words') {
    let words = input.value.split(/\s+/);
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    input.value = words.join(' ');
  } else if (type === 'letters') {
    input.value = input.value.split(' ').map(word => {
      let chars = word.split('');
      for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
      }
      return chars.join('');
    }).join(' ');
  }
}

//5.
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

function runListConvert(delimiter) {
  const input = document.getElementById('listInput');
  if (!input || !input.value) return;

  const items = input.value
    .split(/[\r\n,;|]+/)
    .map(item => item.trim())
    .filter(item => item.length > 0);

  input.value = items.join(delimiter);
}

//6.
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

function runFrequency() {
  const input = document.getElementById('freqInput');
  const resultDiv = document.getElementById('freqResult');
  if (!input || !input.value.trim()) return;

  const words = input.value.toLowerCase().match(/\b[a-z0-9']+\b/g) || [];
  const freqMap = {};

  words.forEach(w => freqMap[w] = (freqMap[w] || 0) + 1);
  const sorted = Object.entries(freqMap).sort((a, b) => b[1] - a[1]).slice(0, 15);

  let html = '<table style="width:100%; border-collapse:collapse; margin-top:15px;">';
  html += '<tr style="border-bottom:2px solid #ccc;"><th style="text-align:left; padding:8px;">Word</th><th style="text-align:left; padding:8px;">Count</th></tr>';
  sorted.forEach(([word, count]) => {
    html += `<tr style="border-bottom:1px solid #eee;"><td style="padding:8px;">${word}</td><td style="padding:8px;">${count}</td></tr>`;
  });
  html += '</table>';

  resultDiv.innerHTML = html;
}


//7.
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

function runReverse(type) {
  const input = document.getElementById('reverseInput');
  if (!input || !input.value) return;

  let val = input.value;
  if (type === 'chars') val = val.split('').reverse().join('');
  else if (type === 'words') val = val.split(/\s+/).reverse().join(' ');
  else if (type === 'lines') val = val.split(/\r?\n/).reverse().join('\n');

  input.value = val;
}

//8.
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

function runCoder(type) {
  const input = document.getElementById('coderInput');
  if (!input || !input.value) return;

  try {
    if (type === 'b64Enc') input.value = btoa(input.value);
    else if (type === 'b64Dec') input.value = atob(input.value);
    else if (type === 'urlEnc') input.value = encodeURIComponent(input.value);
    else if (type === 'urlDec') input.value = decodeURIComponent(input.value);
  } catch (e) {
    alert('Invalid format for decoding!');
  }
}

//9.
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

function runBinary(type) {
  const input = document.getElementById('binInput');
  if (!input || !input.value) return;
  let val = input.value.trim();

  if (type === 'toBin') {
    input.value = val.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
  } else if (type === 'fromBin') {
    input.value = val.split(/\s+/).filter(Boolean).map(b => String.fromCharCode(parseInt(b, 2))).join('');
  } else if (type === 'toHex') {
    input.value = val.split('').map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
  } else if (type === 'toAscii') {
    input.value = val.split('').map(c => `${c}: ${c.charCodeAt(0)}`).join(', ');
  }
}