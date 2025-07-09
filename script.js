function handleSubmit(e) {
  e.preventDefault();

  const form = document.getElementById("contact-form");
  alert("Thank you! I will contact you soon.");

  form.reset();

  const msg = document.createElement("p");
  msg.textContent = "✅ Message sent successfully!";
  msg.style.color = "green";
  msg.style.marginTop = "15px";

  // Avoid multiple messages
  const existing = document.querySelector("#contact-form p");
  if (!existing) {
    form.appendChild(msg);
  }

  return false;
}
