const fs = require("fs");
const https = require("https");
//require("dotenv").config();

// Use environment variables or fallback to direct values
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN ;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME ;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA ;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME ;

const ERR = {
  noUserName: "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed: "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium: "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

// GitHub Data Fetching
if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  const data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
        node {
          ... on Repository {
            name
            description
            forkCount
            stargazers {
              totalCount
            }
            url
            id
            diskUsage
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
}
`
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node",
      "Content-Type": "application/json",
      "Content-Length": data.length
    }
  };

  const req = https.request(options, (res) => {
    let responseData = "";

    console.log(`GitHub API statusCode: ${res.statusCode}`);
    
    if (res.statusCode !== 200) {
      console.error(`GitHub API Error: ${res.statusCode} ${res.statusMessage}`);
      return;
    }

    res.on("data", (chunk) => {
      responseData += chunk;
    });

    res.on("end", () => {
      try {
        // Validate it's JSON before writing
        JSON.parse(responseData);
        fs.writeFile("./public/profile.json", responseData, (err) => {
          if (err) {
            console.error("Error saving profile.json:", err);
          } else {
            console.log("Successfully saved profile.json");
          }
        });
      } catch (error) {
        console.error("Invalid JSON response from GitHub:", error);
      }
    });
  });

  req.on("error", (error) => {
    console.error("GitHub Request Error:", error);
  });

  req.write(data);
  req.end();
}

// Medium Data Fetching - ONLY if username is provided and not empty
if (MEDIUM_USERNAME && MEDIUM_USERNAME !== "" && MEDIUM_USERNAME !== "your_medium_username") {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET",
    headers: {
      "User-Agent": "Node"
    }
  };

  const req = https.request(options, (res) => {
    let mediumData = "";

    console.log(`Medium API statusCode: ${res.statusCode}`);
    
    if (res.statusCode !== 200) {
      console.error(`Medium API Error: ${res.statusCode}`);
      return;
    }

    res.on("data", (chunk) => {
      mediumData += chunk;
    });

    res.on("end", () => {
      try {
        JSON.parse(mediumData);
        fs.writeFile("./public/blogs.json", mediumData, (err) => {
          if (err) {
            console.error("Error saving blogs.json:", err);
          } else {
            console.log("Successfully saved blogs.json");
          }
        });
      } catch (error) {
        console.error("Invalid JSON response from Medium:", error);
      }
    });
  });

  req.on("error", (error) => {
    console.error("Medium Request Error:", error);
  });

  req.end();
} else {
  console.log("Skipping Medium data fetch - no valid username provided");
}

console.log("Data fetch process completed!");