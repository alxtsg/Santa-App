const MAX_CONTENT_LENGTH = 100;

const santaForm = document.getElementById('santaForm');
const contentError = document.getElementById('contentError');

santaForm.onsubmit = () => {
  // If the browser does not support maxlength attribute on <textarea> element,
  // show the error if the wish content is too long.
  contentError.style.display = 'none';
  const wishContent = santaForm.elements.content.value;
  if (wishContent.length > MAX_CONTENT_LENGTH) {
    contentError.style.display = 'block';
    return false;
  }
};
