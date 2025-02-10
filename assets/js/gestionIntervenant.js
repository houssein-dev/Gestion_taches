
function fillIntervenantsTable() {
    const intervenantsTable = document.getElementById("intervenantsTableBody");
    intervenantsTable.innerHTML = '';
    if (data.intervenants.length === 0) {
      intervenantsTable.innerHTML = '<tr><td colspan="5">No data available</td></tr>';
    } else {
      data.intervenants.forEach(intervenant => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${intervenant.IdIntervenant}</td>
          <td>${intervenant.Nom}</td>
          <td>${intervenant.Prenom}</td>
          <td>${intervenant.Poste}</td>
          <td><button onclick="editIntervenant(${intervenant.IdIntervenant})">Edit</button> 
          <button onclick="deleteIntervenant(${intervenant.IdIntervenant})">Delete</button></td>
        `;
        intervenantsTable.appendChild(row);
      });
    }
  }