function fillInterventionsTable() {
    const interventionsTable = document.getElementById("interventionsTableBody");
    interventionsTable.innerHTML = '';
    if (data.interventions.length === 0) {
      interventionsTable.innerHTML = '<tr><td colspan="8">No data available</td></tr>';
    } else {
      data.interventions.forEach(intervention => {
        const intervenant = data.intervenants.find(i => i.IdIntervenant === intervention.IdIntervenant);
        const client = data.clients.find(c => c.IdClient === intervention.IdClient);
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${intervention.Id}</td>
          <td>${intervention.Date}</td>
          <td>${intervention.Type}</td>
          <td>${intervention.Motive}</td>
          <td>${intervention.Etat}</td>
          <td>${intervenant ? intervenant.Nom + ' ' + intervenant.Prenom : ''}</td>
          <td>${client ? client.Nom + ' ' + client.Prenom : ''}</td>
          <td><button onclick="editIntervention(${intervention.Id})">Edit</button> 
          <button onclick="deleteIntervention(${intervention.Id})">Delete</button></td>
        `;
        interventionsTable.appendChild(row);
      });
    }
  }