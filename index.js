const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const port = 3000;

app.get("/api/users", (req, res) => {
    return res.json(users);
})

app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
    </ul>`;
    res.send(html);
})

// dynamic route to get user by id = :id

app.route("/api/users/:id").get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
        return res.json(user);
    } else {
        return res.status(404).json({ error: "User not found" });
    }
}).post((req, res) => {})
.delete((req, res) => {});



app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));