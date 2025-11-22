function getAllArticles() {
  const elements = document.querySelectorAll('a[data-product-id]');
  const ids = [...elements].map(el => el.getAttribute('data-product-id'));

  console.log(ids);
  return ids;
}

getAllArticles();