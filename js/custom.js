(function ()
{
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("email").append(data.email);
    document.getElementById("mobile").append(data.mobile);
    document.getElementById("linkedin").append("https://www.linkedin.com/in/" + data.linkedin);
    document.getElementById("github").append("https://github.com/" + data.github);
    document.getElementById("summary").innerHTML += `<p>${data.professional_summary}</p>`;

    for (let job in data.work)
    {
        const item = data.work[job];

        document.getElementById("experience").innerHTML += `
            <div>
                <h2>${item.role}</h2>
                <i class="far fa-building"></i><h3>${item.company}</h3>
                <i class="fas fa-map-marker-alt"></i><h3>${item.location}</h3>
                <i class="far fa-calendar-alt"></i><h3>${item.start_date} - ${item.end_date}</h3>
                <p>${item.desctiption}</p>
            </div>`;
    }

    for (let course in data.education)
    {
        const item = data.education[course];

        document.getElementById("education").innerHTML += `
            <div>
                <h2>${item.certification}</h2>
                <i class="far fa-building"></i><h3>${item.institute}</h3>
                <i class="fas fa-map-marker-alt"></i><h3>${item.location}</h3>
                <i class="far fa-calendar-alt"></i><h3>${item.start_date}</h3>
            </div>`;
    }

    for (let skill in data.skills)
    {
        const item = data.skills[skill];

        document.getElementById("skills").innerHTML += `<h3>${item}</h3>`;
    }

})();

