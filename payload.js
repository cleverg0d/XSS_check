try {
  alert(document.domain);
} catch (e) {
  console.log("XSS triggered on " + document.domain);
  document.body.innerHTML += "<div style='color:red;font-size:24px;'>XSS</div>";
}