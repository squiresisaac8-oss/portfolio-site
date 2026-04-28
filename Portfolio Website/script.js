//information
const profile = {
  name: "Isaac Squires",
  bio: "1st Year Information Systems Major."
};

const hobbies = [
  "Working Out",
  "Cooking",
  "Traveling",
  "Video Games"
];

const galleryImages = [
  {src: "images/1.png", alt: "Working Out"},
  {src: "images/2.png", alt: "Cooking"},
  {src: "images/3.png", alt: "Traveling"},
  {src: "images/4.png", alt: "Video Games"}
];

const blogs = [
  {title: "Learning JavaScript", url: "#"},
  {title: "Learning HTML", url: "#"},
  {title: "Learning CSS", url: "#"}
];

const courses = [
  {
    name: "IS145",
    learned: ["HTML language", "CSS language"]
  },
  {
    name: "IS175",
    learned: ["Excel software"]
  },
  {
    name: "IS245",
    learned: ["JavaScript language"]
  },
  {
    name: "CS101",
    learned: ["Python language"]
  },
  {
    name: "CS155",
    learned: ["Java language"]
  },
  {
    name: "EN100",
    learned: ["English composition"]
  },
  {
    name: "EN140",
    learned: ["Rhetorical analysis"]
  },
  {
    name: "EC215",
    learned: ["Fundamentals of economics"]
  },
  {
    name: "MA223",
    learned: ["Statistics", "Probability", "R Studio language"]
  },
  {
    name: "UI100",
    learned: ["Introduction to the university"]
  }
];

const projects = [
  {
    title: "Website for Fitness Company",
    logo: "images/5.png",
    description: "A fully complete website including company information, plans, and contacts.",
    tech: ["HTML", "CSS"],
    github: "#"
  },
  {
    title: "Personality Quiz",
    logo: "images/6.png",
    description: "A 5 question quiz that places the user into a house, depending on the answers that were chosen.",
    tech: ["Python"],
    github: "#"
  },
];

const contactInfo = [
  {label: "Email", value: "isquires1s@semo.edu", href: "#"},
  {label: "Phone", value: "+1 (111) 111-1111", href: "#"},
  {label: "GitHub", value: "github.com/isaacsquires", href: "#"},
  {label: "LinkedIn", value: "linkedin.com/in/isaacsquires", href: "#"},
  {label: "Website", value: "isaacsquires.dev", href: "#"}
];


//render
function renderHome() {
  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-bio").textContent  = profile.bio;

  const hobbiesEl = document.getElementById("hobbies-list");
  for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement("li");
    li.textContent = hobbies[i];
    hobbiesEl.appendChild(li);
  }

  const galleryEl = document.getElementById("gallery-grid");
  galleryImages.forEach(function(item) {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    galleryEl.appendChild(img);
  });

  const blogEl = document.getElementById("blog-list");
  blogs.forEach(function(blog) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = blog.url;
    a.textContent = blog.title;
    li.appendChild(a);
    blogEl.appendChild(li);
  });
}

function renderCourses() {
  const coursesEl = document.getElementById("courses-grid");
  courses.forEach(function(course, index) {
    const card = document.createElement("div");
    card.className = "course-card";

    const title = document.createElement("h3");
    title.textContent = (index + 1) + ". " + course.name;
    card.appendChild(title);

    const ul = document.createElement("ul");
    course.learned.forEach(function(point) {
      const li = document.createElement("li");
      li.textContent = point;
      ul.appendChild(li);
    });
    card.appendChild(ul);
    coursesEl.appendChild(card);
  });
}

function renderProjects() {
  const projectsEl = document.getElementById("projects-grid");
  projects.forEach(function(project) {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML =
      "<img src='" + project.logo + "' alt='" + project.title + " logo' width='60' height='60' />" +
      "<h3>" + project.title + "</h3>" +
      "<p>" + project.description + "</p>" +
      "<p><strong>Tech:</strong> " + project.tech.join(", ") + "</p>" +
      "<a href='#'>View on GitHub</a>";

    projectsEl.appendChild(card);
  });
}

function renderContact() {
  const contactEl = document.getElementById("contact-info");
  contactInfo.forEach(function(item) {
    const li = document.createElement("li");
    li.innerHTML = "<strong>" + item.label + ":</strong> <a href='" + item.href + "'>" + item.value + "</a>";
    contactEl.appendChild(li);
  });
}


//message form
function submitForm() {
  let valid = true;

  const name = document.getElementById("f-name").value.trim();
  if (name === "") {
    document.getElementById("err-name").style.display = "inline";
    valid = false;
  } else {
    document.getElementById("err-name").style.display = "none";
  }

  const email = document.getElementById("f-email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("err-email").style.display = "inline";
    valid = false;
  } else {
    document.getElementById("err-email").style.display = "none";
  }

  const message = document.getElementById("f-message").value.trim();
  if (message === "") {
    document.getElementById("err-message").style.display = "inline";
    valid = false;
  } else {
    document.getElementById("err-message").style.display = "none";
  }

  if (valid) {
    document.getElementById("form-success").style.display = "block";
    document.getElementById("f-name").value = "";
    document.getElementById("f-email").value = "";
    document.getElementById("f-message").value = "";
  }
}
