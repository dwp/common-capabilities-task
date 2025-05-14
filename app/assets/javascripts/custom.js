document.addEventListener("DOMContentLoaded", () => {
    const applyBtn = document.getElementById("applyFilters");
    const activeFilters = document.getElementById("activeFilters");
    const rows = Array.from(document.querySelectorAll("tbody tr"));
  
    // Remove any existing reset button
    document.getElementById("resetFilters")?.remove();
  
    // Add Reset Button
    const resetBtn = document.createElement("button");
    resetBtn.id = "resetFilters";
    resetBtn.textContent = "Reset All Filters";
    resetBtn.style.marginTop = "0.5rem";
    resetBtn.style.padding = "0.5rem 1rem";
    document.querySelector(".sidebar").appendChild(resetBtn);
  
    applyBtn.addEventListener("click", () => {
      activeFilters.innerHTML = "";
      const filters = {};
  
      const sort = document.querySelector("input[name='sort']:checked")?.value;
      if (sort) {
        filters.sort = sort;
        renderTag(`Sort: ${sort}`, "sort");
      }
  
      const start = document.getElementById("startDate").value;
      const end = document.getElementById("endDate").value;
      if (start || end) {
        filters.date = { start, end };
        renderTag(`Date: ${start || "Any"} → ${end || "Any"}`, "date");
      }
  
      const type = document.getElementById("taskType").value;
      if (type) {
        filters.type = type.toLowerCase();
        renderTag(`Task Type: ${type}`, "type");
      }
  
      const member = document.getElementById("teamMember").value;
      if (member) {
        filters.member = member.toLowerCase();
        renderTag(`Team Member: ${member}`, "member");
      }
  
      const priority = Array.from(
        document.querySelectorAll("input[name='priority']:checked")
      ).map(i => i.value.toLowerCase());
      if (priority.length) {
        filters.priority = priority;
        priority.forEach(p => renderTag(`Priority: ${p}`, `priority-${p}`));
      }
  
      filterTable(filters);
    });
  
    function renderTag(label, key) {
      const tag = document.createElement("div");
      tag.className = "filter-tag govuk-tag govuk-tag--grey";
      tag.dataset.key = key;
      tag.innerHTML = `${label} <button aria-label="Remove filter ${label}">&times;</button>`;
      tag.querySelector("button").addEventListener("click", () => removeFilter(key));
      activeFilters.appendChild(tag);
    }
  
    function removeFilter(key) {
      if (key === "sort") document.querySelectorAll("input[name='sort']").forEach(i => i.checked = false);
      if (key === "date") {
        document.getElementById("startDate").value = "";
        document.getElementById("endDate").value = "";
      }
      if (key === "type") document.getElementById("taskType").value = "";
      if (key === "member") document.getElementById("teamMember").value = "";
      if (key.startsWith("priority-")) {
        const val = key.replace("priority-", "");
        document.querySelector(`input[name='priority'][value="${val.charAt(0).toUpperCase() + val.slice(1)}"]`).checked = false;
      }
  
      document.querySelector(`.filter-tag[data-key="${key}"]`)?.remove();
      applyBtn.click();
    }
  
    resetBtn.addEventListener("click", () => {
      document.querySelectorAll("input[name='sort']").forEach(i => i.checked = false);
      document.getElementById("startDate").value = "";
      document.getElementById("endDate").value = "";
      document.getElementById("taskType").value = "";
      document.getElementById("teamMember").value = "";
      document.querySelectorAll("input[name='priority']").forEach(i => i.checked = false);
      activeFilters.innerHTML = "";
      applyBtn.click();
    });
  
    function filterTable(filters) {
      rows.forEach(row => {
        const rowDate = row.dataset.created;
        const rowType = row.dataset.type;
        const rowMember = row.dataset.member;
        const rowPriority = row.dataset.priority;
  
        let show = true;
  
        if (filters.date) {
          const created = new Date(rowDate);
          if (filters.date.start && new Date(filters.date.start) > created) show = false;
          if (filters.date.end && new Date(filters.date.end) < created) show = false;
        }
  
        if (filters.type && rowType !== filters.type) show = false;
        if (filters.member && rowMember !== filters.member) show = false;
        if (filters.priority && !filters.priority.includes(rowPriority)) show = false;
  
        row.style.display = show ? "" : "none";
      });
  
      if (filters.sort) {
        const tbody = document.querySelector("tbody");
        const sortedRows = rows
          .filter(row => row.style.display !== "none")
          .sort((a, b) => {
            const dateA = new Date(a.dataset.created);
            const dateB = new Date(b.dataset.created);
            return filters.sort === "asc" ? dateA - dateB : dateB - dateA;
          });
        sortedRows.forEach(row => tbody.appendChild(row));
      }
    }
  
    // Sort on header click
    document.querySelectorAll("thead th[aria-sort]").forEach((th, index) => {
      th.addEventListener("click", () => {
        const tbody = document.querySelector("tbody");
        const currentSort = th.getAttribute("aria-sort");
        const ascending = currentSort !== "ascending";
  
        document.querySelectorAll("thead th[aria-sort]").forEach(header => {
          header.setAttribute("aria-sort", "none");
          header.setAttribute("data-sort-indicator", "⇅");
        });
  
        th.setAttribute("aria-sort", ascending ? "ascending" : "descending");
        th.setAttribute("data-sort-indicator", ascending ? "↑" : "↓");
  
        const sortedRows = [...tbody.querySelectorAll("tr")].sort((a, b) => {
          const textA = a.children[index].textContent.trim().toLowerCase();
          const textB = b.children[index].textContent.trim().toLowerCase();
          return ascending ? textA.localeCompare(textB) : textB.localeCompare(textA);
        });
  
        sortedRows.forEach(row => tbody.appendChild(row));
      });
    });
  });
  
  