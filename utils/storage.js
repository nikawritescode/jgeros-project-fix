export function loadReports() {
  try {
    return JSON.parse(localStorage.getItem('reports') || '[]');
  } catch {
    return [];
  }
}

export function saveReports(rpts) {
  localStorage.setItem('reports', JSON.stringify(rpts));
}
