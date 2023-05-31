# Bcrypt-Sandbox
Playing around with bcrypt hashing algorithms. Honestly, it's pretty cool since it's a slow algorithm, has a required salt, and is named after blowfish.

things to note:
- whenever you are using npm to download anything, remember to use sudo before. For example, "sudo npm install..."
- if a yarn package is not installing, follow this stackoverflow post "https://stackoverflow.com/questions/34546272/cannot-find-module-bcrypt"
- basically, nodeJS uses a different salt for their bcrypt hashing algorithm. To overcome that, just make sure to replace the salt from $2b$ to $2y$. Also, just run the matchtest method to confirm.
