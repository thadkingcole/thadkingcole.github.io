// @ts-nocheck
/*
  I want to easily change which projects are displayed on the portfolio page
  without changing the HTML code. I will be using the github api to get the
  data I want from each project repo, then displaying it in the responsive
  grid setup in portfolio.html
*/

// * global variables
const projectGridEl = $(".project-grid");
const repos = [
  // add repos to be added to project page
  // ! order is randomized with each page load
  "symptom_tracker",
  "is_it_open",
  "weather_dashboard",
  "burger",
  "readme_generator",
  "noted",
];

// * functions
function titleCase(str) {
  // removes underscores
  // capitalizes the first letter of each word
  // adds spaces between each word
  return str
    .split("_")
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");
}

function getRepoInfo(repoName) {
  const url = `https://api.github.com/repos/thadkingcole/${repoName}`;
  fetch(url)
    .then((data) => data.json())
    .then((res) => {
      // create container for card
      const container = $("<div>").addClass("col mb-4");

      // create card
      const cardEl = $("<div>").addClass(
        "card bg-transparent border-primary shadow-lg h-100"
      );

      // create img that links to deployed site
      const imgLink = $("<a>")
        .addClass("card-link")
        .attr("href", res.homepage)
        .attr("target", "_blank");
      // create the actual img tag
      const screenshotURL = `https://raw.githubusercontent.com/thadkingcole/${repoName}/master/public/images/screenshot.png`;
      const screenshot = $("<img>")
        .addClass("card-img-top")
        .attr("src", screenshotURL)
        .attr("alt", repoName);
      // add screenshot to the imgLink
      imgLink.append(screenshot);

      // create card body
      const cardBody = $("<div>").addClass("card-body");
      const cardTitle = $("<h2>")
        .addClass("card-title text-center")
        .text(titleCase(res.name));
      const cardText = $("<p>").addClass("card-text").text(res.description);
      // append card body together
      cardBody.append(cardTitle).append(cardText);

      // create card footer
      const cardFooter = $("<div>").addClass("card-footer");
      const footerList = $("<ul>").addClass("list-group list-group-flush");
      const deployedSite = $("<li>").addClass("list-group-item");
      const faLaptop = $("<i>")
        .addClass("fa fa-laptop")
        .attr("aria-hidden", "true");
      const deployedLink = $("<a>")
        .addClass("card-link")
        .attr("href", res.homepage)
        .attr("target", "_blank")
        .text(" Deployed Site");
      const github = $("<li>").addClass("list-group-item");
      const faGithub = $("<i>")
        .addClass("fa fa-github")
        .attr("aria-hidden", "true");
      const githubLink = $("<a>")
        .addClass("card-link")
        .attr("href", res.html_url)
        .attr("target", "_blank")
        .text(" Github Repo");
      // append card footer together
      deployedSite.append(faLaptop).append(deployedLink);
      github.append(faGithub).append(githubLink);
      footerList.append(deployedSite).append(github);
      cardFooter.append(footerList);

      // append everything together
      cardEl.append(imgLink);
      cardEl.append(cardBody);
      cardEl.append(cardFooter);
      container.append(cardEl);
      projectGridEl.append(container);
    });
}

// * main
repos.forEach((repo) => getRepoInfo(repo));
