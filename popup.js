document.addEventListener("DOMContentLoaded", () => {

    const commands=[
        "the git init - Initialize a new Repo",
        "git clone <url> - Clone a Repo",
        "git status - Check changes",
        "git add . - Stage all changes",
        "git commit -m 'MESSAGE' - Commit changes",
        "git push - Push commits",
        "git pull - Pull latest changes",
        "git branch - List branches",
        "git branch <name> - Create a new branch",
        "git checkout <branch> - Switch to a branch",
        "git checkout -b <branch> - Create and switch to a branch",
        "git merge <branch> - Merge a branch into the current branch",
        "git stash - Temporarily save changes",
    ];
    const list=document.createElement("ul");
    commands.forEach(cmd => {
        const li=document.createElement("li");
        li.innerHTML=`<code>${cmd}</code>`;
        list.appendChild(li);
    });

    document.body.appendChild(list);

});
