const listContainer = document.getElementById("listContainer");
const pageType = document.body.dataset.page;
const caseList = document.getElementById("caseList");
const caseSearchInput = document.getElementById("caseSearchInput");

const createProvisionCard = (item) => `
  <article class="right-card">
    <div class="right-card__header">
      <p class="right-card__provision">${item.provision}</p>
      <h2>${item.title}</h2>
    </div>
    <p class="right-card__summary">${item.summary}</p>
    <a class="right-card__link" href="${item.path}">${item.category === "rights" ? "Read this amendment" : "Read this section"}</a>
  </article>
`;

const createCaseCard = (caseItem) => `
  <article class="right-card">
    <div class="right-card__header">
      <p class="right-card__provision">${caseItem.provisionLabel}</p>
      <h2>${caseItem.name}</h2>
    </div>
    <p class="right-card__summary">${caseItem.holding}</p>
    <p class="case-citation">Citation: ${caseItem.citation}</p>
    <a class="right-card__link" href="${caseItem.provisionPath}">View related provision</a>
  </article>
`;

if (pageType === "structure") {
  const structureItems = provisions.filter((item) => item.category === "structure");
  listContainer.innerHTML = structureItems.map(createProvisionCard).join("");
}

if (pageType === "rights") {
  const rightItems = provisions.filter((item) => item.category === "rights");
  listContainer.innerHTML = rightItems.map(createProvisionCard).join("");
}

if (pageType === "caselaw") {
  const normalize = (value) => value.toLowerCase();

  const buildCaseDirectory = (query = "") => {
    const normalizedQuery = normalize(query.trim());
    const caseItems = getAllCases().filter((caseItem) => {
      if (!normalizedQuery) return true;
      return (
        normalize(caseItem.name).includes(normalizedQuery) ||
        normalize(caseItem.holding).includes(normalizedQuery) ||
        normalize(caseItem.citation).includes(normalizedQuery) ||
        normalize(caseItem.topic).includes(normalizedQuery) ||
        normalize(caseItem.provisionTitle).includes(normalizedQuery) ||
        normalize(caseItem.provisionLabel).includes(normalizedQuery)
      );
    });

    if (caseItems.length === 0) {
      caseList.innerHTML = `<div class="empty-state">No caselaw matches found.</div>`;
      return;
    }

    const grouped = caseItems.reduce((acc, caseItem) => {
      const provisionKey = `${caseItem.provisionLabel} — ${caseItem.provisionTitle}`;
      acc[provisionKey] = acc[provisionKey] || {};
      const topicKey = caseItem.topic || "Key holdings";
      acc[provisionKey][topicKey] = acc[provisionKey][topicKey] || [];
      acc[provisionKey][topicKey].push(caseItem);
      return acc;
    }, {});

    caseList.innerHTML = Object.entries(grouped)
      .map(([provisionKey, topics]) => {
        const topicMarkup = Object.entries(topics)
          .map(([topic, cases]) => {
            const caseMarkup = cases
              .map(
                (caseItem) => `
                  <li>
                    <a href="${caseItem.provisionPath}">${caseItem.name} (${caseItem.year})</a>
                    <p>${caseItem.holding}</p>
                    <p class="case-citation">Citation: ${caseItem.citation}</p>
                  </li>
                `
              )
              .join("");
            return `
              <details class="case-topic">
                <summary>${topic}</summary>
                <ul>${caseMarkup}</ul>
              </details>
            `;
          })
          .join("");

        return `
          <details>
            <summary>${provisionKey}</summary>
            ${topicMarkup}
          </details>
        `;
      })
      .join("");
  };

  buildCaseDirectory();

  if (caseSearchInput) {
    caseSearchInput.addEventListener("input", (event) => {
      buildCaseDirectory(event.target.value);
    });
  }
}
