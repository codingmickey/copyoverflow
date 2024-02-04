window.addEventListener('load', main, false);

document.querySelector('pre.s-code-block').addEventListener('');

function main() {
  console.log('Script injected hehe :)');

  const codeBlocks = document.querySelectorAll('pre.s-code-block');

  console.log('codeBlocks', codeBlocks);

  codeBlocks.forEach((codeBlock) => {
    const copyButton = document.createElement('button');
    // style="position: absolute;top: 10px;right: -191px;transition: right 0.1s ease-in-out 0s;background: transparent;border: 1px solid white;border: 0;height: 37px;width: 37px;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow */transition: background-color 0.3s, box-shadow 0.3s; /* Add transition for hover effect */color: white;border-radius: 10px;"
    copyButton.style =
      'position: absolute;top: 10px;right: 10px;transition: right 0.1s ease-in-out 0s;background: transparent;border: 1px solid white;border: 0;height: 37px;width: 37px;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow */transition: background-color 0.3s, box-shadow 0.3s; /* Add transition for hover effect */color: white;border-radius: 10px;';
    copyButton.onclick = copyContent;
    copyButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" style="padding-top: 2px;"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor"></path></svg>';
    codeBlock.appendChild(copyButton);

    codeBlock.style = 'position: relative;';
    codeBlock.onscroll = handleScroll;
  });
}

function copyContent(event) {
  // Find the closest div to the button
  const btn = document.querySelector('button');

  const button = event.target.parentNode;
  const closestDiv = button.previousElementSibling; // Adjust if necessary

  if (closestDiv) {
    // Copy the content of the div
    const contentToCopy = closestDiv.innerText;

    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = contentToCopy;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text to the clipboard

    // TODO: Using the Clipboard API
    // https://stackoverflow.com/questions/60217202/copy-text-to-clipboard-now-that-execcommandcopy-is-obsolete
    document.execCommand('copy');

    // Remove the temporary textarea from the document
    document.body.removeChild(textarea);

    // Optionally, provide feedback to the user
    alert('Content has been copied to the clipboard!');
  } else {
    alert('No adjacent div found!');
  }
}

function handleScroll(event) {
  const textArea = event.target;
  const copyBtn = textArea.lastChild;

  if (textArea.scrollLeft > 0) {
    copyBtn.style.right = `${10 - textArea.scrollLeft}px`;
  } else {
    copyBtn.style.right = `10px`;
  }
}
