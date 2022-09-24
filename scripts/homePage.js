
    const d = new Date();
    const options = {year: "numeric"};
    const time = {year: "numeric", month: "long", day: "numeric"};
    document.getElementById("currentDate").textContent = d.toLocaleDateString("en-US", options);
    document.getElementById("lastModified").textContent = document.lastModified;