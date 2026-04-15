function calculateScore() {

    let title = Number(document.getElementById("title").value);
    let meta = Number(document.getElementById("meta").value);
    let keyword = Number(document.getElementById("keyword").value);
    let backlinks = Number(document.getElementById("backlinks").value);

    let score = (title + meta + keyword + backlinks) / 4;

    let result = document.getElementById("result");

    result.innerText = "SEO Score: " + score;

    // Color logic
    if (score >= 80) {
        result.style.backgroundColor = "green";
        result.style.color = "white";
    } 
    else if (score >= 50) {
        result.style.backgroundColor = "orange";
        result.style.color = "white";
    } 
    else {
        result.style.backgroundColor = "red";
        result.style.color = "white";
    }
}