const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
  const adultsInput = document.getElementById("adults");
  const childrenInput = document.getElementById("children");
  const totalInput = document.getElementById("total");

  const adults = parseInt(adultsInput.value) || 0;
  const children = parseInt(childrenInput.value) || 0;

  const total = adults + children;

  totalInput.value = total.toString();
});
