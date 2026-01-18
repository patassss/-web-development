const main = document.querySelector("main");
const navLinks = document.querySelectorAll("nav a");
const asideSections = document.querySelectorAll(".aside-section");
const asideLinks = document.querySelectorAll("aside a");

function hideAllAside() {
    asideSections.forEach(section => {
        section.classList.add("hidden");
    });
}

// NAV MENU
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const section = link.dataset.section;

        hideAllAside();

       if (section === "admin") {
    if (localStorage.getItem("loggedIn") === "true") {
        renderAdminPanel();
    } else {
        loginBtn.click(); // ⬅️ ΑΥΤΟ ΕΛΕΙΠΕ
    }
    return;
}


        if (section) {
            const aside = document.getElementById(`aside-${section}`);
            if (aside) aside.classList.remove("hidden");

            main.innerHTML = `
                <h2>${link.textContent}</h2>
                <p>Επιλέξτε υποκατηγορία από το αριστερό μενού.</p>
            `;
        }
    });
});


// STATIC CONTENT
const content = {
    bio: {
        early: `
            <h2>Πρώτα χρόνια</h2>
             
                    <p>
                        Ο Λευτέρης Πετρούνιας γεννήθηκε στις 30 Νοεμβρίου 1990 στην Αθήνα.
                        Από μικρή ηλικία έδειξε ενδιαφέρον για τον αθλητισμό και συγκεκριμένα
                        για την ενόργανη γυμναστική.
                    </p>

                    <p>
                        Ξεκίνησε την ενασχόλησή του με την ενόργανη γυμναστική σε παιδική ηλικία
                        και γρήγορα ξεχώρισε για τη δύναμη, την τεχνική και την αφοσίωσή του.
                        Η συστηματική προπόνηση και η επιμονή του τον βοήθησαν να εξελιχθεί
                        σταδιακά σε έναν από τους πιο υποσχόμενους αθλητές του αθλήματος.
                    </p>

                    <p>
                        Κατά τα πρώτα του χρόνια στον αθλητισμό συμμετείχε σε εγχώριους αγώνες,
                        αποκτώντας σημαντικές εμπειρίες που έθεσαν τις βάσεις για τη μελλοντική
                        του πορεία σε εθνικό και διεθνές επίπεδο.
                    </p>


        `,
        career: `
            <h2>Αγωνιστική καριέρα</h2>
           
                <p>
                    Ο Λευτέρης Πετρούνιας αποτελεί έναν από τους κορυφαίους αθλητές
                    ενόργανης γυμναστικής παγκοσμίως στο αγώνισμα των κρίκων.
                    Η αγωνιστική του πορεία χαρακτηρίζεται από σταθερότητα,
                    υψηλό επίπεδο τεχνικής και μεγάλη διάρκεια στον χρόνο.
                </p>

                <p>
                    Έχει εκπροσωπήσει την Ελλάδα σε κορυφαίες διεθνείς διοργανώσεις,
                    όπως Παγκόσμια και Ευρωπαϊκά Πρωταθλήματα, καθώς και σε
                    Ολυμπιακούς Αγώνες, κατακτώντας σημαντικές διακρίσεις.
                </p>

                <p>
                    Η συνεχής παρουσία του στην παγκόσμια ελίτ του αθλήματος
                    τον έχει καθιερώσει ως σημείο αναφοράς για την ενόργανη
                    γυμναστική και ως πρότυπο αθλητή για τις νεότερες γενιές.
                </p>
           
        `,
        highlights: `
            <h2>Σημαντικές στιγμές</h2>
            <ul>
                <li>Χρυσό μετάλλιο στους Ολυμπιακούς Αγώνες Ρίο 2016</li>
    <li>            Πολλαπλές κατακτήσεις χρυσών μεταλλίων σε Παγκόσμια Πρωταθλήματα</li>
    <li>         Πρωταθλητής Ευρώπης στο αγώνισμα των κρίκων</li>
    <li>         Συνεχής παρουσία σε τελικούς μεγάλων διεθνών διοργανώσεων</li>
    <li>         Αναγνώριση ως ένας από τους κορυφαίους αθλητές κρίκων όλων των εποχών</li>
            </ul>
        `
    },

    photos: {
        olympics: `
            <h2>Ολυμπιακοί Αγώνες</h2>
            <div class="gallery">
               <figure class="photo-card">
                    <img src="assets/images/olympic1.jpg" alt="Ολυμπιακοί Αγώνες 2024">
                    <figcaption>
                    6ος ο Λευτέρης Πετρούνιας στην πρώτη του εμφάνιση στο Παγκόσμιο Κύπελλο Όσιγεκ (2025).  
                    <br><span>Πηγή: ego-gymnastics.gr</span>
                    </figcaption>
                </figure>

                <figure class="photo-card">
                    <img src="assets/images/olympic2.jpg" alt="Ολυμπιακοί Αγώνες 2024">
                    <figcaption>
                    Ο Λευτέρης Πετρούνιας «σφράγισε» την πρόκριση για 7η φορά σε τελικό Παγκοσμίου Πρωταθλήματος.  
                    <br><span>Πηγή: HuffPost Greece</span>
                    </figcaption>
                </figure>
            </div>
        `,
        world: `
           
            <h2>Παγκόσμιο Κύπελλο & Παγκόσμια Πρωταθλήματα</h2>

                <div class="gallery">

                    <figure class="photo-card">
                        <img src="assets/images/world1.jpg" alt="Παγκόσμιο Κύπελλο">
                        <figcaption>
                        6ος ο Λευτέρης Πετρούνιας στην πρώτη του εμφάνιση στο Παγκόσμιο Κύπελλο Ενόργανης Γυμναστικής (2025).
                        <br><span>Πηγή: ego-gymnastics.gr</span>
                        </figcaption>
                    </figure>

                    <figure class="photo-card">
                        <img src="assets/images/world2.jpg" alt="Παγκόσμιο Πρωτάθλημα">
                        <figcaption>
                        Ο Λευτέρης Πετρούνιας «σφράγισε» την πρόκριση για 7η φορά σε τελικό Παγκοσμίου Πρωταθλήματος.
                        <br><span>Πηγή: HuffPost Greece</span>
                        </figcaption>
                    </figure>

                </div>
           

        `,
        training: `
            <h2>Προπονήσεις</h2>
                <div class="gallery-grid">

                    <figure class="gallery-card">
                        <img src="assets/images/training1.jpg" alt="Προπόνηση στους κρίκους">
                        <figcaption>
                        Προπόνηση του Λευτέρη Πετρούνια στους κρίκους ενόψει διεθνών αγώνων.  
                        <span>Πηγή: newsit.gr</span>
                        </figcaption>
                    </figure>

                    <figure class="gallery-card">
                        <img src="assets/images/training2.jpg" alt="Προπόνηση στο χιόνι">
                        <figcaption>
                        Σκληρή προπόνηση μέσα στο χιόνι, δείγμα της αφοσίωσής του.  
                        <span>Πηγή: sport24.gr</span>
                        </figcaption>
                    </figure>

                </div>
        `
    },
        
    
        

    
};

        



// ASIDE MENU
asideLinks.forEach(link => {
    link.addEventListener("click", e => {
        // ACTIVE button στο aside
        asideLinks.forEach(a => a.classList.remove("active"));
        link.classList.add("active");

        e.preventDefault();
        

        console.log("CLICK", link.dataset.section, link.dataset.group);

       const section = link.closest(".aside-section").id.replace("aside-", "");

const group =
    section === "distinctions"
        ? link.dataset.dist
        : link.dataset.group;


        if (section !== "links" && content[section] && content[section][group]) {
            main.innerHTML = content[section][group];
        }
        if (section === "distinctions") {
    fetch(`http://localhost:3000/api/distinctions/${group}`)
        .then(res => res.json())
        .then(data => {

            if (!data || data.length === 0) {
                main.innerHTML = "<p>Δεν υπάρχουν διακρίσεις.</p>";
                return;
            }

            let html = `
                <h2>${link.textContent}</h2>
                <table class="awards-table">
                    <thead>
                        <tr>
                            <th>Έτος</th>
                            <th>Διοργάνωση</th>
                            <th>Μετάλλιο</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            data.forEach(d => {
                html += `
                    <tr>
                        <td>${d.year}</td>
                        <td>${d.event}</td>
                        <td>${d.medal}</td>
                    </tr>
                `;
            });

            html += `
                    </tbody>
                </table>
            `;

            main.innerHTML = html;
        });

    return;
}

        if (section === "links") {
            fetch(`http://localhost:3000/api/links/${group}`)
            .then(res => res.json())
            .then(data => {
             let html = `
                <h2>${link.textContent}</h2>
                <div class="links-grid">
            `;

            data.forEach(item => {
                html += `
                    <a href="${item.url}"
                       target="_blank"
                       class="link-card">
                       ▶️ ${item.title}
                    </a>
                `;
            });

            html += "</div>";
            main.innerHTML = html;
        });
    return;
}


    });
});
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
function renderAdminPanel() {
    document.getElementById("aside-admin").classList.remove("hidden");

    main.innerHTML = `
        <h2>Διαχείριση Συνδέσμων</h2>

        <h3>Προσθήκη νέου συνδέσμου</h3>
        <input id="linkTitle" placeholder="Τίτλος"><br><br>
        <input id="linkUrl" placeholder="URL"><br><br>

        <select id="linkType">
            <option value="videos">Βίντεο</option>
            <option value="interviews">Συνεντεύξεις</option>
            <option value="articles">Άρθρα</option>
        </select><br><br>

        <button id="addLinkBtn">➕ Προσθήκη</button>

        <h3>Υπάρχοντες σύνδεσμοι</h3>
        <div id="adminLinks"></div>
    `;

    loadAdminLinks();

    // ✅ ΕΔΩ ΔΕΝΕΙ ΠΑΝΤΑ ΤΟ ➕
    document.getElementById("addLinkBtn").addEventListener("click", () => {
        const title = document.getElementById("linkTitle").value.trim();
        const url = document.getElementById("linkUrl").value.trim();
        const type = document.getElementById("linkType").value;

        if (!title || !url) {
            alert("Συμπλήρωσε τίτλο και URL");
            return;
        }

        fetch("http://localhost:3000/api/links", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, url, type })
        })
        .then(res => res.json())
        .then(() => {
            loadAdminLinks();
            document.getElementById("linkTitle").value = "";
            document.getElementById("linkUrl").value = "";
            alert("Ο σύνδεσμος προστέθηκε!");
        });
    });
    main.innerHTML += `
        <hr>
        <h2>Διαχείριση Διακρίσεων</h2>

        <input id="distYear" placeholder="Έτος"><br><br>
        <input id="distEvent" placeholder="Διοργάνωση"><br><br>
        <input id="distMedal" placeholder="Μετάλλιο"><br><br>

        <select id="distType">
        <option value="olympic">Ολυμπιακοί</option>
        <option value="world">Παγκόσμια</option>
        <option value="european">Ευρωπαϊκά</option>
        </select><br><br>

        <button id="addDistBtn">➕ Προσθήκη Διάκρισης</button>

        <div id="adminDist"></div>
        `;
        document.getElementById("addDistBtn").addEventListener("click", () => {
        console.log("ADD LINK CLICKED");
        const year = document.getElementById("distYear").value;
        const event = document.getElementById("distEvent").value;
        const medal = document.getElementById("distMedal").value;
        const type = document.getElementById("distType").value;

        if (!year || !event || !medal) {
            alert("Συμπλήρωσε όλα τα πεδία");
            return;
        }

        fetch("http://localhost:3000/api/distinctions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ year, event, medal, type })
        })
        .then(() => {
            loadAdminDist();
            distYear.value = "";
            distEvent.value = "";
            distMedal.value = "";
        });
    });
    loadAdminDist();

}



loginBtn.addEventListener("click", () => {
    main.innerHTML = `
        <h2>Σύνδεση Διαχειριστή</h2>
        <input id="user" placeholder="Username"><br><br>
        <input id="pass" type="password" placeholder="Password"><br><br>
        <button id="loginSubmit">Σύνδεση</button>
        <p id="loginMsg"></p>
    `;

    document.getElementById("loginSubmit").addEventListener("click", () => {
        const username = document.getElementById("user").value;
        const password = document.getElementById("pass").value;

        fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        })
        .then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(() => {
            localStorage.setItem("loggedIn", "true");
            loginBtn.style.display = "none";
            logoutBtn.style.display = "inline";
            renderAdminPanel();
        });


    })
        .catch(() => {
            document.getElementById("loginMsg").innerText = "Λάθος στοιχεία";
        });
    });


logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
    document.getElementById("aside-admin").classList.add("hidden");

    main.innerHTML = "<p>Αποσυνδέθηκες</p>";
});
function loadAdminLinks() {
    const container = document.getElementById("adminLinks");
    container.innerHTML = "";

    ["videos", "interviews", "articles"].forEach(type => {
        fetch(`http://localhost:3000/api/links/${type}`)
            .then(res => res.json())
            .then(data => {
                const section = document.createElement("div");
                section.innerHTML = `<h4>${type}</h4>`;

                data.forEach((item, index) => {
                    const div = document.createElement("div");
                    div.innerHTML = `
                        ${item.title}
                        <button class="deleteLinkBtn"
                            data-type="${type}"
                            data-index="${index}">
                            ❌
                        </button>

                    `;
                    section.appendChild(div);
                });

                container.appendChild(section);
            });
    });
}
function loadAdminDist() {
  const box = document.getElementById("adminDist");
  box.innerHTML = "";

  ["olympic", "world", "european"].forEach(type => {
    fetch(`http://localhost:3000/api/distinctions/${type}`)
      .then(res => res.json())
      .then(data => {
        box.innerHTML += `<h4>${type}</h4>`;
        data.forEach((d, i) => {
          box.innerHTML += `
            ${d.year} - ${d.event} (${d.medal})
            <button onclick="deleteDist('${type}', ${i})">❌</button><br>
          `;
        });
      });
  });
}

function deleteDist(type, index) {
  fetch(`http://localhost:3000/api/distinctions/${type}/${index}`, {
    method: "DELETE"
  }).then(() => loadAdminDist());
}

document.addEventListener("click", e => {
      
    // ❌ ΔΙΑΓΡΑΦΗ LINK
if (e.target.classList.contains("deleteLinkBtn")) {
    const type = e.target.dataset.type;
    const index = e.target.dataset.index;

    fetch(`http://localhost:3000/api/links/${type}/${index}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(() => {
        loadAdminLinks();
        alert("Ο σύνδεσμος διαγράφηκε!");
    });
}

});
