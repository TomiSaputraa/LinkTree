const shareButtons = document.querySelectorAll(".tile-share-button");
console.log(shareButtons);

async function copyText(e) {
  // prevent button going to site
  e.preventDefault();
  const link = this.getAttribute("link");
  console.log(link);

  try {
    await navigator.clipboard.writeText(link);
    alert("Copied text link : " + link);
  } catch (error) {
    console.log(error);
  }
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);
