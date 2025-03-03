document.addEventListener("DOMContentLoaded", () => {

    const commands=[
        "git init - Initialize a new Repo",
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
    const list=document.getElementById("git-commands");
    commands.forEach(cmd => {
        const li=document.createElement("li");

        // using the occurence of " - " to separate command and description (not "-"!)
        const separator = " - ";
        let commandPart = cmd;
        let descriptionPart = "";
        const idx = cmd.lastIndexOf(separator);
        if(idx >-1){
            commandPart = cmd.substring(0,idx);
            descriptionPart = cmd.substring(idx + separator.length);
        }


        const codeElement = document.createElement("code");
        codeElement.textContent = commandPart;
        // add the description as data attribute
        if (descriptionPart){
            codeElement.setAttribute("data-tooltip", descriptionPart);
        }
        li.appendChild(codeElement);

        // copy button
        const copyButton = document.createElement("button");
        copyButton.textContent = "copy";
        // match the command font!
        copyButton.style.fontFamily = "inherit";
        copyButton.addEventListener("click", () => {
          navigator.clipboard.writeText(commandPart)
            .then(() => {
              copyButton.textContent = "copied";
              setTimeout(() => {
                copyButton.textContent = "copy";
              }, 1500);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });
        li.appendChild(copyButton);
        list.appendChild(li);

    });

});
