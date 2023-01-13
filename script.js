const bio = document.getElementById('bio-text');
const bioLength = document.getElementsByName('bio-length')
const bioText = [
    'wants to build cool things.',
    'has first class honours degrees in computer science and music education, and is currently focusing developing his skills in front end web development. He wants to build cool things',
    'is a skilled computer scientist and musician with a passion for solving puzzles and building cool projects. He holds first class honours degrees in both computer science and music education. Currently focusing on front end web development, he aspires to become a full stack engineer and build innovative projects.',
    'has changed his career trajectory from becoming a secondary music teacher to follow his passion for web development. He holds first class honours degrees in both computer science and music education. Currently focusing on front end web development, he aspires to become a full stack engineer and build innovative projects. When he\'s not staring at a screen, Liam enjoys playing in band pits for local musical theatre productions or other events, solving puzzles and escape rooms, and playing tabletop role playing games like Dungeons and Dragons.',
    'truly believes in lifelong learning and enjoys developing his skills in web development and music. He has recently decided to become a web developer and left his previous career as a secondary music teacher to pursue this passion. Achieving first class honours degrees in both computer science and music education has prepared him for a lifetime of continual professional and personal development. Currently focusing on front end web development, he aspires to become a full stack engineer and build innovative projects. When he\'s not staring at a screen, Liam plays in band pits for local musical theatre productions and in bands for other events.',
    'is a highly skilled and multifaceted individual with a passion for both computer science and music. With a first class honours degree in each subject, Liam is a lifelong learner with a love for solving puzzles and developing new skills. Currently, Liam is focusing on becoming a front end web developer, with aspirations to eventually become a full stack engineer. Liam is driven by a desire to build cool and innovative things using his web development skills. In his spare time, Liam enjoys riding motorcycles, performing as a professional musician, and practising his skills as an amateur pianist and singer. Liam is also a fan of fantasy literature and enjoys playing Dungeons and Dragons with friends. With a diverse range of interests and a strong foundation in both computer science and music education, Liam is a well-rounded and highly skilled individual with a bright future ahead.'
];

for( let i = 0; i < bioLength.length; i++ ) { 
    bioLength[i].addEventListener('change', () => {
        bio.innerHTML = bioText[bioLength[i].value];
    });
}

sk = document.getElementById('skills-description')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            entry.target.classList.add('show');
            sk.innerHTML = entry.target.parentElement.id;
        } 
        else { 
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const menu = document.getElementById("nav-toggle");
const navButton = document.querySelectorAll(".nav-button");

navButton.forEach(button => {
    button.addEventListener('click', () => {
        menu.checked = false;
    });
});