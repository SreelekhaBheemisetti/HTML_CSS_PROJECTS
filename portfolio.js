// Function to scroll to a section smoothly
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
}

// Event listener for navigation menu links
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', scrollToSection);
});

// Function to display content based on the clicked link
function displayContent(event) {
    const targetId = event.target.getAttribute('href').substring(1);
    const content = {
        skills: `
            <ul>
                <li><i class="fa-brands fa-python"></i></li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>`,
        contact: `
            <p>Email: sreelekhabheemisetti@navgurukul.org</p>
            <p>Mobile: 7660912838</p>`
    };
    document.getElementById('content').innerHTML = content[targetId] || '';
}

// Add event listeners for About, Skills, and Contact links
document.querySelectorAll('.navlist a').forEach(link => {
    if (['skills', 'contact'].includes(link.getAttribute('href').substring(1))) {
        link.addEventListener('click', displayContent);
    }
});

// Event listener for "About Me" button
document.querySelector('.btn').addEventListener('click', function(event) {
    scrollToSection(event);
    displayContent(event);
});
