document.addEventListener("DOMContentLoaded", () => {
    const commands=[
        "git init = Initialize a new repo",
        "git clone <url> = Clone a repo",
        "git status + Check changes",
        "git add . + Stage all changes",
        "git commit -m 'MESSAGE' = Commit changes",
        "git push = Push commits",
        "git pull = Pull latest changes"
    ];
    const list=document.getElementById("git-commands");
    commands.forEach(cmd=>{
        const li=document.createElement("li");
        li.innerHTM=`<code>${cmd}</code>`;
        list.appendChild(li);
    });
});
