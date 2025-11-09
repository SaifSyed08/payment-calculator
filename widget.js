(function() {
  const iframe = document.createElement("iframe");
  iframe.src = "https://yourusername.github.io/payment-calculator/";
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "600px";
  iframe.style.borderRadius = "10px";
  iframe.loading = "lazy";

  document.currentScript.parentNode.insertBefore(iframe, document.currentScript);
})();


/*
Embed this widget anywhere using:
<div id="payment-widget"></div>
<script src="https://github.com/SaifSyed08/payment-calculator/blob/main/widget.js"></script>
*/
