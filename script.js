const API_URL = "https://exam-portal-website.onrender.com";

let reload = 5;
const reloadbtn = document.getElementById("loadQuestions")

function startExam(){
    const startBtn = document.createElement('button')
    startBtn.innerText = "Click here to begin"
    document.getElementById('questionLoader').appendChild(startBtn)
}

reloadbtn.addEventListener("click", async () => {
    if (reload > 0){
        reloadbtn.textContent = `New Questions (${reload} attempts)`
        const res = await fetch(`${API_URL}/questions`);
        const questions = await res.json();
        
        const list = document.getElementById("questionList");
        list.innerHTML = "";
        
        // console.log(questions)
        
        const q1 = document.createElement('li')
        const q2 = document.createElement('li')
        const q3 = document.createElement('li')
        
        q1.setAttribute('id','questionItems')
        q2.setAttribute('id','questionItems')
        q3.setAttribute('id','questionItems')

        q1.innerHTML = questions[Math.floor(Math.random()*41)].text
        q2.innerHTML = questions[Math.floor(Math.random() * (120 - 41 + 1)) + 41].text
        q3.innerHTML = questions[Math.floor(Math.random() * (120 - 41 + 1)) + 41].text
        
        list.appendChild(q1)
        list.appendChild(q2)
        list.appendChild(q3)
        
        reload--;
    } else {
        reloadbtn.textContent = "No more reloads left"
        reloadbtn.disable = true
        
        // startExam()
    }
        console.log(reload)
/*     questions.forEach((q, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>Q${index + 1}:</strong> ${q.text}`;
        list.appendChild(li);
    }); */
});
if (performance.getEntriesByType("navigation")[0].type === "reload") {
    window.location.href = "index.html"; // redirect to index
}

document.getElementById('download').addEventListener("click", async () => {
    if (typeof html2pdf === "undefined") {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js");
    }
    const element = document.getElementById("content");
    html2pdf().from(element).save("webpage.pdf");
});

function loadScript(src){
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

/* document.getElementById('userForm').addEventListener("submit",async (e) => {
    e.preventDefault()

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value
    };

    const res = await fetch(`${API_URL}/users`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
    })

    const data = res.json();
    console.log("Saved",data);
    alert("User Saved to MongoDb!");
})

//fetch users -> GET /users
document.getElementById("loadUsers").addEventListener("click",async ()=>{
    const res = await fetch(`${API_URL}/users`);
    const users = await res.json()

    const list = document.getElementById("usersList");
    list.innerHTML = ""

    users.forEach(user => {
        const li = document.createElement('li')
        li.textContent = `${user.name}(${user.email},Age: ${user.age});`
        list.appendChild(li)
    })
})
 */





/* document.getElementById('btn').onclick = async ()=>{
    const res = await fetch('http://localhost:3020/data');
    const data = await res.text();
    document.getElementById('view').innerHTML = data;
} */
/* 
function sendData(){
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    fetch("http://localhost:3020/users",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({name, age})
    })
    .then(res => res.json())
    .then(data => console.log("Response: ",data));
} */

