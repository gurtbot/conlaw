const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const searchResults = document.getElementById("searchResults");
const structureCount = document.getElementById("structureCount");
const rightsCount = document.getElementById("rightsCount");
const caseCount = document.getElementById("caseCount");

const updateCounts = () => {
  structureCount.textContent = provisions.filter((item) => item.category === "structure").length;
  rightsCount.textContent = provisions.filter((item) => item.category === "rights").length;
  caseCount.textContent = getAllCases().length;
};

const renderSearchResults = (query) => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    searchResults.innerHTML = "";
    return;
  }

  const provisionMatches = provisions.filter((item) => {
    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.provision.toLowerCase().includes(normalizedQuery) ||
      item.summary.toLowerCase().includes(normalizedQuery) ||
      item.fullText.toLowerCase().includes(normalizedQuery)
    );
  });

  const caseMatches = getAllCases().filter((caseItem) => {
    return (
      caseItem.name.toLowerCase().includes(normalizedQuery) ||
      caseItem.holding.toLowerCase().includes(normalizedQuery) ||
      caseItem.citation.toLowerCase().includes(normalizedQuery)
    );
  });

  if (provisionMatches.length === 0 && caseMatches.length === 0) {
    searchResults.innerHTML = `<div class="empty-state">No matches found. Try a different keyword.</div>`;
    return;
  }

  const provisionList = provisionMatches
    .map(
      (item) => `
        <li>
          <a href="${item.path}">
            <strong>${item.provision}</strong> — ${item.title}
          </a>
          <p>${item.summary}</p>
        </li>
      `
    )
    .join("");

  const caseList = caseMatches
    .map(
      (caseItem) => `
        <li>
          <a href="${caseItem.provisionPath}">
            <strong>${caseItem.name}</strong> (${caseItem.year}) — ${caseItem.provisionLabel}
          </a>
          <p>${caseItem.holding}</p>
          <p class="case-citation">Citation: ${caseItem.citation}</p>
        </li>
      `
    )
    .join("");

  searchResults.innerHTML = `
    <div class="search-results__section">
      <h2>Matching Sections & Amendments</h2>
      ${provisionMatches.length ? `<ul>${provisionList}</ul>` : "<p>No section matches found.</p>"}
    </div>
    <div class="search-results__section">
      <h2>Matching Cases</h2>
      ${caseMatches.length ? `<ul>${caseList}</ul>` : "<p>No case matches found.</p>"}
    </div>
  `;
};

searchInput.addEventListener("input", (event) => {
  renderSearchResults(event.target.value);
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  renderSearchResults("");
});

updateCounts();
renderSearchResults("");
