function ripples(e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  this.append(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 1000);
}
// saat tombol payment diklik -> tambahkan efek riak
document.querySelector(".payment-btn").addEventListener("click", ripples);
