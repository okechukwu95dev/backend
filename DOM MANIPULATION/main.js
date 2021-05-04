//change heading inner text
document.getElementById('main-heading').innerText = "New DOM Layout";

//add new class to heading for background
document.getElementById('page-header').classList.remove('bg-dark');
document.getElementById('page-header').classList.add('bg-success');

//altering our paragraphs
// Paragraph 1
document.getElementById('para1').innerText =  "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."

// Paragraph 2 
document.getElementById('para2').innerText = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

// Add button functionality for paragraph 4 
document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("para4").innerText = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
});


//Remove clashing bg-white
document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("bg-white");
});

// add individual bg-colors 
document.getElementById('red').classList.add('bg-danger');
document.getElementById('blue').classList.add('bg-primary');
document.getElementById('yellow').classList.add('bg-warning');
document.getElementById('green').classList.add('bg-success');
document.getElementById('black').classList.add('bg-dark');
