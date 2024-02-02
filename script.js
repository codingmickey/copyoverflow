function copyContent() {
  // Find the closest div to the button
  const button = document.querySelector('.top-right-button');
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
    document.execCommand('copy');

    // Remove the temporary textarea from the document
    document.body.removeChild(textarea);

    // Optionally, provide feedback to the user
    alert('Content has been copied to the clipboard!');
  } else {
    alert('No adjacent div found!');
  }
}
