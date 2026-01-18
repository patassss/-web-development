const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


const fs = require("fs");
const path = require("path");

const user = require("./auth/users.json");
const distinctions = require("./data/distinctions.json");
const links = require("./data/links.json");


app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.static(path.join(__dirname, "public")));



app.get("/api/distinctions/:type", (req, res) => {
    const type = req.params.type;
    res.json(distinctions[type] || []);
});

app.get("/api/links/:type", (req, res) => {
    const type = req.params.type;
    res.json(links[type] || []);
});
app.delete("/api/links/:type/:index", (req, res) => {
    const { type, index } = req.params;

    if (!links[type]) {
        return res.status(400).json({ error: "Invalid type" });
    }

    links[type].splice(index, 1);

    fs.writeFileSync(
        path.join(__dirname, "data", "links.json"),
        JSON.stringify(links, null, 2)
    );

    res.json({ success: true });
});


app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
});



// ➕ Προσθήκη νέου link
app.post("/api/links", (req, res) => {
    const { type, title, url } = req.body;

    if (!type || !title || !url) {
        return res.status(400).json({ error: "Missing fields" });
    }

    const filePath = path.join(__dirname, "data", "links.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (!data[type]) {
        return res.status(400).json({ error: "Invalid link type" });
    }

    data[type].push({ title, url });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.json({ success: true });
});

// ❌ Διαγραφή link
app.delete("/api/links/:type/:index", (req, res) => {
    const { type, index } = req.params;

    const filePath = path.join(__dirname, "data", "links.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (!data[type] || !data[type][index]) {
        return res.status(404).json({ error: "Link not found" });
    }

    data[type].splice(index, 1);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.json({ success: true });
});

app.post("/api/distinctions", (req, res) => {
  const { year, event, medal, type } = req.body;

  if (!distinctions[type]) {
    return res.status(400).json({ error: "Invalid type" });
  }

  distinctions[type].push({ year, event, medal });

  fs.writeFileSync(
    path.join(__dirname, "data", "distinctions.json"),
    JSON.stringify(distinctions, null, 2)
  );

  res.json({ success: true });
});

app.delete("/api/distinctions/:type/:index", (req, res) => {
  const { type, index } = req.params;

  if (!distinctions[type]) {
    return res.status(400).json({ error: "Invalid type" });
  }

  distinctions[type].splice(Number(index), 1);

  fs.writeFileSync(
    path.join(__dirname, "data", "distinctions.json"),
    JSON.stringify(distinctions, null, 2)
  );

  res.json({ success: true });
});

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});



// ---------- SERVER ----------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});





