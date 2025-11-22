function getProductAttributes() {
  const result = {};

  document.querySelectorAll('.tab-pane-product-parameter-item')
    .forEach(item => {
      const nameEl = item.querySelector('.parameter-name');
      const valueEl = item.querySelector('.parameter-value');

      if (!nameEl || !valueEl) return;

      const name = [...nameEl.childNodes]
        .filter(node => node.nodeType === Node.TEXT_NODE)
        .map(node => node.textContent.trim())
        .join(' ')
        .trim();

      const value = valueEl.textContent.trim().replace(/\s+/g, ' ');

      if (name) {
        result[name] = value;
      }
    });

  console.log(result);
  return result;
}

getProductAttributes();