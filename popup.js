document.addEventListener("DOMContentLoaded", () => {
    console.log("Popup script loaded!");

    const commands = [
        "git init - Initialize a new repo",
        "git clone <url> - Clone a repo",
        "git status - Check changes",
        "git add . - Stage all changes",
        "git commit -m 'message' - Commit changes",
        "git push - Push commits",
        "git pull - Pull latest changes"
    ];

    const list = document.createElement("ul");
    
    commands.forEach(cmd => {
        const li = document.createElement("li");
        li.innerHTML = `<code>${cmd}</code>`;
        list.appendChild(li);
    });

    document.body.appendChild(list);
});
