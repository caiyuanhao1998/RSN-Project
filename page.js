const copyButton = document.querySelector('#copy-citation');
const status = document.querySelector('#copy-status');

if (navigator.clipboard) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(document.querySelector('#bibtex').textContent);
      status.textContent = 'BibTeX copied to the clipboard.';
      copyButton.textContent = 'Copied';
    } catch {
      status.textContent = 'Select the BibTeX to copy it manually.';
      copyButton.textContent = 'Copy BibTeX';
    }
  });
}
