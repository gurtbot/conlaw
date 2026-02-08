const rightsData = [
  {
    id: "first-amendment",
    title: "Freedom of speech, press, religion, assembly, and petition",
    provision: "First Amendment",
    category: "freedom",
    summary:
      "Protects expressive activity and religious liberty, limiting government ability to suppress speech, control religious exercise, or penalize peaceful assembly.",
    guarantees: [
      "Government must meet strict standards before restricting speech based on its content or viewpoint.",
      "Individuals can practice religion freely, and government cannot establish a national religion.",
      "People may peaceably assemble and petition the government for redress of grievances."
    ],
    cases: [
      {
        name: "Brandenburg v. Ohio",
        year: 1969,
        holding: "Speech advocating violence is protected unless it is intended and likely to incite imminent lawless action.",
        citation: "395 U.S. 444"
      },
      {
        name: "New York Times Co. v. United States",
        year: 1971,
        holding: "The government faces a heavy burden to justify prior restraints on publication.",
        citation: "403 U.S. 713"
      },
      {
        name: "Tinker v. Des Moines Independent Community School District",
        year: 1969,
        holding: "Students do not shed constitutional rights at the schoolhouse gate absent material disruption.",
        citation: "393 U.S. 503"
      }
    ]
  },
  {
    id: "second-amendment",
    title: "Right to keep and bear arms",
    provision: "Second Amendment",
    category: "freedom",
    summary:
      "Protects an individual right to possess firearms for lawful purposes such as self-defense, while allowing some regulation.",
    guarantees: [
      "Individuals have a right to keep firearms in the home for self-defense.",
      "The right is not unlimited; certain longstanding regulations remain permissible."
    ],
    cases: [
      {
        name: "District of Columbia v. Heller",
        year: 2008,
        holding: "Recognized an individual right to possess a handgun in the home for self-defense.",
        citation: "554 U.S. 570"
      },
      {
        name: "McDonald v. City of Chicago",
        year: 2010,
        holding: "Applied the Second Amendment to state and local governments through the Fourteenth Amendment.",
        citation: "561 U.S. 742"
      }
    ]
  },
  {
    id: "fourth-amendment",
    title: "Protection against unreasonable searches and seizures",
    provision: "Fourth Amendment",
    category: "privacy",
    summary:
      "Requires government to justify searches and seizures, often with a warrant supported by probable cause.",
    guarantees: [
      "People have a right to be secure in their persons, houses, papers, and effects.",
      "Warrants must be particularized and based on probable cause."
    ],
    cases: [
      {
        name: "Katz v. United States",
        year: 1967,
        holding: "The Fourth Amendment protects people, not places, and applies when there is a reasonable expectation of privacy.",
        citation: "389 U.S. 347"
      },
      {
        name: "Mapp v. Ohio",
        year: 1961,
        holding: "Evidence obtained in violation of the Fourth Amendment is generally inadmissible in state courts.",
        citation: "367 U.S. 643"
      },
      {
        name: "Carpenter v. United States",
        year: 2018,
        holding: "Accessing historical cell-site location data generally requires a warrant.",
        citation: "585 U.S. 296"
      }
    ]
  },
  {
    id: "fifth-amendment",
    title: "Due process, self-incrimination, and just compensation",
    provision: "Fifth Amendment",
    category: "justice",
    summary:
      "Guarantees procedural protections in criminal cases, including the right to remain silent and the requirement of due process.",
    guarantees: [
      "No person can be compelled to be a witness against themselves in criminal cases.",
      "Government must provide due process before depriving someone of life, liberty, or property.",
      "Private property cannot be taken for public use without just compensation."
    ],
    cases: [
      {
        name: "Miranda v. Arizona",
        year: 1966,
        holding: "Police must advise suspects of their rights before custodial interrogation.",
        citation: "384 U.S. 436"
      },
      {
        name: "Kelo v. City of New London",
        year: 2005,
        holding: "Economic development can qualify as a public use under the Takings Clause.",
        citation: "545 U.S. 469"
      }
    ]
  },
  {
    id: "sixth-amendment",
    title: "Right to counsel and a fair criminal trial",
    provision: "Sixth Amendment",
    category: "justice",
    summary:
      "Ensures criminal defendants receive a speedy, public trial with an impartial jury, counsel, and the ability to confront witnesses.",
    guarantees: [
      "Defendants have the right to counsel in criminal prosecutions.",
      "Trials must be speedy and public, with an impartial jury and notice of charges.",
      "Defendants can confront witnesses and compel testimony."
    ],
    cases: [
      {
        name: "Gideon v. Wainwright",
        year: 1963,
        holding: "States must provide counsel to indigent defendants charged with serious offenses.",
        citation: "372 U.S. 335"
      },
      {
        name: "Crawford v. Washington",
        year: 2004,
        holding: "Testimonial statements are inadmissible unless the witness is unavailable and the defendant had a prior opportunity to cross-examine.",
        citation: "541 U.S. 36"
      }
    ]
  },
  {
    id: "eighth-amendment",
    title: "Protection against cruel and unusual punishment",
    provision: "Eighth Amendment",
    category: "justice",
    summary:
      "Limits the severity of criminal punishment, prohibiting cruel and unusual punishment and excessive bail or fines.",
    guarantees: [
      "Punishment must be proportionate to the offense.",
      "Bail and fines cannot be excessive."
    ],
    cases: [
      {
        name: "Furman v. Georgia",
        year: 1972,
        holding: "The death penalty as applied then was arbitrary and violated the Eighth Amendment.",
        citation: "408 U.S. 238"
      },
      {
        name: "Miller v. Alabama",
        year: 2012,
        holding: "Mandatory life without parole for juveniles is unconstitutional.",
        citation: "567 U.S. 460"
      }
    ]
  },
  {
    id: "fourteenth-amendment",
    title: "Equal protection and due process",
    provision: "Fourteenth Amendment",
    category: "equality",
    summary:
      "Requires states to provide equal protection of the laws and extends due process protections against state action.",
    guarantees: [
      "States must treat similarly situated people alike unless a sufficient justification exists.",
      "Fundamental rights are protected from state infringement."
    ],
    cases: [
      {
        name: "Brown v. Board of Education",
        year: 1954,
        holding: "State-mandated racial segregation in public schools violates equal protection.",
        citation: "347 U.S. 483"
      },
      {
        name: "Loving v. Virginia",
        year: 1967,
        holding: "Bans on interracial marriage violate equal protection and due process.",
        citation: "388 U.S. 1"
      },
      {
        name: "Obergefell v. Hodges",
        year: 2015,
        holding: "Same-sex couples have a fundamental right to marry under the Fourteenth Amendment.",
        citation: "576 U.S. 644"
      }
    ]
  },
  {
    id: "voting-rights",
    title: "Voting rights and democratic participation",
    provision: "Fifteenth, Nineteenth, Twenty-Fourth, Twenty-Sixth Amendments",
    category: "equality",
    summary:
      "Prohibits denying the right to vote based on race, sex, failure to pay poll taxes, or age for citizens 18 and older.",
    guarantees: [
      "Race, color, or previous condition of servitude cannot be used to deny the vote.",
      "The right to vote cannot be denied on the basis of sex.",
      "Poll taxes in federal elections are prohibited.",
      "Citizens 18 and older cannot be denied the vote based on age."
    ],
    cases: [
      {
        name: "Shelby County v. Holder",
        year: 2013,
        holding: "Invalidated the coverage formula for preclearance under the Voting Rights Act.",
        citation: "570 U.S. 529"
      },
      {
        name: "Harper v. Virginia Board of Elections",
        year: 1966,
        holding: "Poll taxes in state elections violate equal protection.",
        citation: "383 U.S. 663"
      }
    ]
  },
  {
    id: "commerce-power",
    title: "Limits on federal power and the Commerce Clause",
    provision: "Article I, Section 8",
    category: "structure",
    summary:
      "Defines Congress's enumerated powers and sets limits on federal authority over local activity.",
    guarantees: [
      "Congress can regulate interstate commerce but faces limits on purely local, non-economic activity.",
      "Federalism principles preserve state sovereignty in areas beyond enumerated powers."
    ],
    cases: [
      {
        name: "McCulloch v. Maryland",
        year: 1819,
        holding: "Congress has implied powers and states cannot tax federal institutions.",
        citation: "17 U.S. (4 Wheat.) 316"
      },
      {
        name: "United States v. Lopez",
        year: 1995,
        holding: "Congress exceeded its Commerce Clause authority by criminalizing gun possession in school zones.",
        citation: "514 U.S. 549"
      },
      {
        name: "NFIB v. Sebelius",
        year: 2012,
        holding: "Congress cannot compel individuals to engage in commerce under the Commerce Clause.",
        citation: "567 U.S. 519"
      }
    ]
  }
];

const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const rightsGrid = document.getElementById("rightsGrid");
const rightsCount = document.getElementById("rightsCount");
const casesCount = document.getElementById("casesCount");
const filterButtons = document.querySelectorAll(".filter-button");

const state = {
  filter: "all",
  query: ""
};

const countCases = () => rightsData.reduce((total, right) => total + right.cases.length, 0);

const createCaseList = (cases) =>
  cases
    .map(
      (caseItem) => `
        <li>
          <h4>${caseItem.name} <span>(${caseItem.year})</span></h4>
          <p>${caseItem.holding}</p>
          <p class="case-citation">Citation: ${caseItem.citation}</p>
        </li>
      `
    )
    .join("");

const createGuarantees = (guarantees) =>
  guarantees.map((item) => `<li>${item}</li>`).join("");

const renderRights = () => {
  const normalizedQuery = state.query.trim().toLowerCase();
  const filtered = rightsData.filter((right) => {
    const matchesFilter = state.filter === "all" || right.category === state.filter;
    const matchesQuery =
      normalizedQuery === "" ||
      right.title.toLowerCase().includes(normalizedQuery) ||
      right.provision.toLowerCase().includes(normalizedQuery) ||
      right.summary.toLowerCase().includes(normalizedQuery) ||
      right.cases.some((caseItem) => caseItem.name.toLowerCase().includes(normalizedQuery));
    return matchesFilter && matchesQuery;
  });

  rightsGrid.innerHTML = filtered
    .map(
      (right) => `
        <article class="right-card">
          <div class="right-card__header">
            <p class="right-card__provision">${right.provision}</p>
            <h2>${right.title}</h2>
          </div>
          <p class="right-card__summary">${right.summary}</p>
          <div class="right-card__section">
            <h3>What it guarantees</h3>
            <ul>
              ${createGuarantees(right.guarantees)}
            </ul>
          </div>
          <div class="right-card__section">
            <h3>Key Supreme Court cases</h3>
            <ol>
              ${createCaseList(right.cases)}
            </ol>
          </div>
        </article>
      `
    )
    .join("");

  if (filtered.length === 0) {
    rightsGrid.innerHTML = `<div class="empty-state">No rights matched your search. Try another keyword.</div>`;
  }
};

const updateCounts = () => {
  rightsCount.textContent = rightsData.length;
  casesCount.textContent = countCases();
};

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderRights();
});

clearSearch.addEventListener("click", () => {
  state.query = "";
  searchInput.value = "";
  renderRights();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");
    state.filter = button.dataset.filter;
    renderRights();
  });
});

updateCounts();
renderRights();
