const detailContainer = document.getElementById("provisionDetail");
const provisionId = document.body.dataset.provisionId;
const titleText = document.getElementById("provisionTitle");
const kickerText = document.getElementById("provisionKicker");

const provision = provisions.find((item) => item.id === provisionId);

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

if (!provision) {
  detailContainer.innerHTML = `<div class="empty-state">Provision not found.</div>`;
} else {
  document.title = `${provision.provision} | Constitutional Rights Explorer`;
  kickerText.textContent = provision.provision;
  titleText.textContent = provision.title;

  detailContainer.innerHTML = `
    <article class="right-card">
      <div class="right-card__header">
        <p class="right-card__provision">${provision.provision}</p>
        <h2>${provision.title}</h2>
      </div>
      <p class="right-card__summary">${provision.summary}</p>
      <div class="right-card__section">
        <h3>What it guarantees</h3>
        <ul>
          ${createGuarantees(provision.guarantees)}
        </ul>
      </div>
      <div class="right-card__section">
        <h3>Key Supreme Court cases</h3>
        <ol>
          ${provision.cases.length ? createCaseList(provision.cases) : "<li>No landmark Supreme Court cases listed.</li>"}
        </ol>
      </div>
    </article>
  `;
}
