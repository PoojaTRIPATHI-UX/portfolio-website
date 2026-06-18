document.getElementById("rec-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const msg = document.getElementById("rec-message").value;
  if (msg.trim() === "") return;

  const newRec = document.createElement("div");
  newRec.className = "rec-card";
  newRec.textContent = msg;

  document.getElementById("rec-list").appendChild(newRec);
  document.getElementById("rec-message").value = "";
  document.getElementById("rec-name").value = "";
});
