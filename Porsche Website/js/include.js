fetch('../include/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(err => console.error(err));

// Footer
fetch('../include/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(err => console.error(err));