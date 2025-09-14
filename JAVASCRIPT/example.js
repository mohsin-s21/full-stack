// Create a new paragraph and append it
const newparagraph = document.createElement('p');
newparagraph.textContent = "This is a new paragraph using JavaScript.";
myDiv.appendChild(newparagraph);

myDiv.addEventListener('click', () => {
    alert('Div clicked!');
});