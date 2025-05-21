document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const modal = document.getElementById("projectModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  
  if (!name || !email.includes("@") || message.length < 10) {
    e.preventDefault();
    alert("Please fill out all fields correctly.");
  }
});

document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const moreText = button.previousElementSibling;
    moreText.classList.toggle("show");
    button.textContent = moreText.classList.contains("show") ? "Read Less" : "Read More";
  });
});

const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "↑";
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "20px";
scrollTopBtn.style.right = "20px";
scrollTopBtn.style.padding = "10px 15px";
scrollTopBtn.style.backgroundColor = "#3c693f";
scrollTopBtn.style.color = "#fff";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.borderRadius = "5px";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.display = "none";
scrollTopBtn.style.zIndex = "1000";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

const modal = document.getElementById("projectModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

if (openModalBtn) {
  openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  
  if (!name || !email.includes("@") || message.length < 10) {
    e.preventDefault();
    alert("Please fill out all fields correctly.");
  }
});

document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const moreText = button.previousElementSibling;
    moreText.classList.toggle("show");
    button.textContent = moreText.classList.contains("show") ? "Read Less" : "Read More";
  });
});

const revealSections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
}, {
  threshold: 0.1
});

revealSections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const moreText = button.previousElementSibling.querySelector(".more-text");
    moreText.classList.toggle("show");
    button.textContent = moreText.classList.contains("show") ? "Read Less" : "Read More";
  });
});
