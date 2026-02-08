const listContainer = document.getElementById("listContainer");
const pageType = document.body.dataset.page;

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
  const caseItems = getAllCases();
  listContainer.innerHTML = caseItems.map(createCaseCard).join("");
}
