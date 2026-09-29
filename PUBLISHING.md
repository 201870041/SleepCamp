# Publishing this disconnected portfolio

Publish only this export directory into a new repository with fresh history. Do not upload the parent project, previous exports, or the original Git history.

After creating an empty public GitHub repository named `SleepCamp-Portfolio`, run these commands from this directory, replacing `YOUR_GITHUB_USERNAME`:

```sh
git init -b main
git add README.md PUBLISHING.md .gitignore package.json miniprogram cloudfunctions docs
git commit -m "Add disconnected source samples and project structure"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/SleepCamp-Portfolio.git
git push -u origin main
```

The public link will be `https://github.com/YOUR_GITHUB_USERNAME/SleepCamp-Portfolio` after a successful push.

Only selected generic implementations and descriptions of omitted modules are included. Public code can be read and reused. The application connections, backend implementations, and curriculum remain private.

If an earlier export was already published, deleting files in a later commit does not remove them from history or downloaded copies. Start with this export in a fresh repository.
