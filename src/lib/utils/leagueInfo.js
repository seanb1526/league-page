/*   STEP 1   */
export const leagueID = "1055990443915157504"; // your league ID
export const leagueName = "Dynasty"; // your league name
export const dues = 40; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the Dynasty League Website!</p>
  <p>Leage established in 2023.</p>
  <p>League rules will be in "League Info -> Constitution" tab. Currently there's just a bunch of random shit in there youc an ignore it for now.</p>
  <p>Rivals will be added soon. You plays rivals twice every season, its just an added feature for fun.</p>
  <h3>Draft Date TBD</h3>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
   // "roster": 1,
    "managerID" : "",
    "name": "",
    //"location": "---",
    "bio": "Bio",
    "photo": "/managers/seanPic.png",
    "fantasyStart": 2023,
    //"favoriteTeam": "---",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: null,
      image: "/managers/rival.jpg",
    },
  },
  
  {
    // "roster": 2,
    "managerID" : "613805733846261760",
    "name": "Jack",
    "location": "---",
    "bio": "---",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2023,
    //"favoriteTeam": "---",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: null,
      image: "/managers/rival.jpg",
    },
  },
  {
    // "roster": 3,
    "managerID" : "785976730140770304",
    "name": "Eli",
    "location": "---",
    "bio": "---",
    "photo": "/managers/eliPic.png",
    "fantasyStart": 2023,
    //"favoriteTeam": "---",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: null,
      image: "/managers/rival.jpg",
    },
  },

  {
    // "roster": 4,
    "managerID" : "809873222345543680",
    "name": "Connor",
    "location": "---",
    "bio": "---",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2023,
    //"favoriteTeam": "---",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: null,
      image: "/managers/rival.jpg",
    },
  },

  {
    // "roster": 5,
    "managerID" : "966517146626920448",
    "name": "Joe",
    "location": "---",
    "bio": "---",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2023,
    //"favoriteTeam": "---",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: null,
      image: "/managers/rival.jpg",
    },
  },

  {
    // "roster": 6,
    "managerID" : "997675036204998656",
    "name": "Dault",
    "location": "---",
    "bio": "---",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2023,
    ///"favoriteTeam": "---",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: null,
      image: "/managers/rival.jpg",
    },
  },

  {
    // "roster": 7,
    "managerID" : "997707841148440576",
    "name": "Matt",
    "location": "---",
    "bio": "---",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2023,
    ///"favoriteTeam": "---",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: null,
      image: "/managers/rival.jpg",
    },
  },

  {
    // "roster": 8,
    "managerID" : "997734541819252736",
    "name": "Mike",
    "location": "---",
    "bio": "---",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2023,
    ///"favoriteTeam": "---",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: null,
      image: "/managers/rival.jpg",
    },
  },

  {
    // "roster": 9,
    "managerID" : "997757603901943808",
    "name": "Drew",
    "location": "---",
    "bio": "---",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2023,
    ///"favoriteTeam": "---",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: null,
      image: "/managers/rival.jpg",
    },
  },

  //{
    // "roster": 10,
    // "managerID" : "809873222345543680",
    // "name": "Connor",
    // "location": "---",
    // "bio": "---",
    // "photo": "/managers/name.jpg",
    // "fantasyStart": 2023,
    // "favoriteTeam": "---",
    // "mode": "Win Now",
    // "rival": {
    //  name: "Rival",
    //  link: null,
    //  image: "/managers/rival.jpg",
    //},
  //}

  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
