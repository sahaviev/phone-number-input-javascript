const MAX_LENGTH = 14;

const handlePhoneKeydown = (evt: Event) => {
  const input = evt.target as HTMLInputElement;
  const key = (evt as KeyboardEvent).key;

  if (key === "Backspace") {
    if (input.selectionStart === 10) {
      input.selectionStart = input.selectionEnd = 9;
    }
    if (input.selectionStart === 5 || input.selectionStart === 6) {
      input.selectionStart = input.selectionEnd = 4;
    }
    return;
  }

  if (key === "Delete") {
    if (input.selectionStart === 9) {
      input.selectionStart = input.selectionEnd = 10;
    }
    if (input.selectionStart === 4 || input.selectionStart === 5) {
      input.selectionStart = input.selectionEnd = 6;
    }
    return;
  }

  const hasSelection = (input.selectionEnd || 0) - (input.selectionStart || 0) > 0;
  if (input.value.length === MAX_LENGTH && !(key === "ArrowLeft" || key === "ArrowRight") && !hasSelection) {
    evt.preventDefault();
  }
};

const handlePhoneInput = (evt: Event) => {
  const input = evt.target as HTMLInputElement;
  const selectionStart = input.selectionStart || 0;

  const phone = input.value.replace(/\D/g, '')
    .replace(/^(\d{3})(\d)/, '($1) $2')
    .replace(/(\d{3})(\d{1,4})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');

  const newCaretPosition = (phone.length > input.value.length) ? phone.length - input.value.length + selectionStart : selectionStart;
  input.value = phone;
  input.selectionStart = input.selectionEnd = newCaretPosition;
};

export function formatPhonePlugin(element: Element) {
  element.addEventListener('keydown', handlePhoneKeydown);
  element.addEventListener('input', handlePhoneInput);
}
