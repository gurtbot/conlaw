const rightsData = [
  {
    id: "preamble",
    title: "Preamble",
    provision: "We the People",
    category: "structure",
    summary:
      "Sets the Constitution's purposes: forming a more perfect union, establishing justice, ensuring domestic tranquility, providing for defense, promoting general welfare, and securing liberty.",
    guarantees: [
      "Explains the Constitution's goals and foundational principles.",
      "Frames the authority of the Constitution as coming from the people."
    ],
    cases: []
  },
  {
    id: "article-i",
    title: "Legislative powers and limits",
    provision: "Article I",
    category: "structure",
    summary:
      "Establishes Congress, outlines lawmaking powers, and lists enumerated federal authority including taxation, spending, and regulation of commerce.",
    guarantees: [
      "Congress holds legislative power and may only act within enumerated powers.",
      "The House and Senate must follow specific procedures to pass laws."
    ],
    cases: [
      {
        name: "McCulloch v. Maryland",
        year: 1819,
        holding: "Congress has implied powers to carry out enumerated authority and states cannot tax federal institutions.",
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
  },
  {
    id: "article-ii",
    title: "Executive power and accountability",
    provision: "Article II",
    category: "structure",
    summary:
      "Creates the presidency, vests executive power, and defines duties such as enforcing laws, commanding the military, and appointing officials.",
    guarantees: [
      "The President must faithfully execute the laws.",
      "Appointments and treaties require Senate advice and consent."
    ],
    cases: [
      {
        name: "Youngstown Sheet & Tube Co. v. Sawyer",
        year: 1952,
        holding: "The President cannot seize private property without congressional authorization.",
        citation: "343 U.S. 579"
      },
      {
        name: "United States v. Nixon",
        year: 1974,
        holding: "Executive privilege is limited and cannot block a criminal subpoena.",
        citation: "418 U.S. 683"
      }
    ]
  },
  {
    id: "article-iii",
    title: "Judicial power and review",
    provision: "Article III",
    category: "structure",
    summary:
      "Establishes the federal judiciary and vests judicial power in the Supreme Court and lower federal courts.",
    guarantees: [
      "Federal courts interpret the Constitution and federal law.",
      "Judges hold office during good behavior to protect independence."
    ],
    cases: [
      {
        name: "Marbury v. Madison",
        year: 1803,
        holding: "Confirmed the Supreme Court's power of judicial review.",
        citation: "5 U.S. (1 Cranch) 137"
      },
      {
        name: "Cooper v. Aaron",
        year: 1958,
        holding: "States are bound by Supreme Court decisions interpreting the Constitution.",
        citation: "358 U.S. 1"
      }
    ]
  },
  {
    id: "article-iv",
    title: "States, full faith and credit, and federalism",
    provision: "Article IV",
    category: "structure",
    summary:
      "Governs relationships among states, including recognition of laws, privileges and immunities, and admission of new states.",
    guarantees: [
      "States must generally recognize public acts and judicial proceedings of other states.",
      "Citizens are entitled to privileges and immunities when traveling between states."
    ],
    cases: [
      {
        name: "Saenz v. Roe",
        year: 1999,
        holding: "States cannot restrict welfare benefits based on how long a person has lived in the state.",
        citation: "526 U.S. 489"
      }
    ]
  },
  {
    id: "article-v",
    title: "Amendment process",
    provision: "Article V",
    category: "structure",
    summary:
      "Defines how the Constitution can be amended by Congress and the states.",
    guarantees: [
      "Amendments require supermajority approval by Congress and the states.",
      "States can propose amendments through a convention process."
    ],
    cases: [
      {
        name: "Coleman v. Miller",
        year: 1939,
        holding: "Questions about the timeliness of ratification are largely political, not judicial.",
        citation: "307 U.S. 433"
      }
    ]
  },
  {
    id: "article-vi",
    title: "Supremacy Clause and oaths",
    provision: "Article VI",
    category: "structure",
    summary:
      "Declares the Constitution and federal law supreme and requires officials to swear an oath to support it.",
    guarantees: [
      "Federal law prevails over conflicting state law.",
      "Religious tests for public office are prohibited."
    ],
    cases: [
      {
        name: "McCulloch v. Maryland",
        year: 1819,
        holding: "States cannot impede valid federal law through taxation.",
        citation: "17 U.S. (4 Wheat.) 316"
      }
    ]
  },
  {
    id: "article-vii",
    title: "Ratification",
    provision: "Article VII",
    category: "structure",
    summary: "Explains how the Constitution would take effect after ratification by the states.",
    guarantees: ["Requires approval by nine states to establish the Constitution."],
    cases: []
  },
  {
    id: "first-amendment",
    title: "Freedom of speech, press, religion, assembly, and petition",
    provision: "First Amendment",
    category: "rights",
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
    category: "rights",
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
    id: "third-amendment",
    title: "Quartering of soldiers",
    provision: "Third Amendment",
    category: "rights",
    summary:
      "Prohibits the government from forcing people to house soldiers in private homes during peacetime without consent.",
    guarantees: ["Soldiers cannot be quartered in private homes without consent during peacetime."],
    cases: [
      {
        name: "Engblom v. Carey",
        year: 1982,
        holding: "The Third Amendment applies to states through the Fourteenth Amendment.",
        citation: "677 F.2d 957"
      }
    ]
  },
  {
    id: "fourth-amendment",
    title: "Protection against unreasonable searches and seizures",
    provision: "Fourth Amendment",
    category: "rights",
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
    category: "rights",
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
    category: "rights",
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
    id: "seventh-amendment",
    title: "Civil jury trials",
    provision: "Seventh Amendment",
    category: "rights",
    summary:
      "Preserves the right to a jury trial in certain civil cases and limits reexamination of facts found by a jury.",
    guarantees: ["Civil litigants retain the right to a jury trial in suits at common law."],
    cases: [
      {
        name: "Tull v. United States",
        year: 1987,
        holding: "Defendants are entitled to a jury trial on liability in suits seeking civil penalties.",
        citation: "481 U.S. 412"
      }
    ]
  },
  {
    id: "eighth-amendment",
    title: "Protection against cruel and unusual punishment",
    provision: "Eighth Amendment",
    category: "rights",
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
    id: "ninth-amendment",
    title: "Unenumerated rights",
    provision: "Ninth Amendment",
    category: "rights",
    summary:
      "Clarifies that listing certain rights in the Constitution does not deny other rights retained by the people.",
    guarantees: ["The people retain rights not expressly listed in the Constitution."],
    cases: [
      {
        name: "Griswold v. Connecticut",
        year: 1965,
        holding: "Recognized privacy protections derived from the Bill of Rights.",
        citation: "381 U.S. 479"
      }
    ]
  },
  {
    id: "tenth-amendment",
    title: "Reserved powers",
    provision: "Tenth Amendment",
    category: "rights",
    summary: "Reserves to the states or the people powers not delegated to the federal government.",
    guarantees: ["Federal power is limited to what is delegated in the Constitution."],
    cases: [
      {
        name: "Printz v. United States",
        year: 1997,
        holding: "Congress cannot commandeer state officials to carry out federal law.",
        citation: "521 U.S. 898"
      }
    ]
  },
  {
    id: "fourteenth-amendment",
    title: "Equal protection and due process",
    provision: "Fourteenth Amendment",
    category: "rights",
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
    category: "rights",
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
  }
];

const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const rightsGrid = document.getElementById("rightsGrid");
const structureCount = document.getElementById("structureCount");
const rightsCount = document.getElementById("rightsCount");
const filterButtons = document.querySelectorAll(".filter-button");

const state = {
  filter: "structure",
  query: ""
};

const countByCategory = (category) => rightsData.filter((right) => right.category === category).length;

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

const createGuarantees = (guarantees) => guarantees.map((item) => `<li>${item}</li>`).join("");

const renderRights = () => {
  const normalizedQuery = state.query.trim().toLowerCase();
  const filtered = rightsData.filter((right) => {
    const matchesFilter = right.category === state.filter;
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
              ${right.cases.length ? createCaseList(right.cases) : "<li>No landmark Supreme Court cases listed.</li>"}
            </ol>
          </div>
        </article>
      `
    )
    .join("");

  if (filtered.length === 0) {
    rightsGrid.innerHTML = `<div class="empty-state">No provisions matched your search. Try another keyword.</div>`;
  }
};

const updateCounts = () => {
  structureCount.textContent = countByCategory("structure");
  rightsCount.textContent = countByCategory("rights");
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
