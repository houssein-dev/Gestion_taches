
    // -------------------------------
    // Diagramme en barres : Tâches réalisées par intervenant
    // -------------------------------
    const intervenants = data.intervenants;
    const interventions = data.interventions;
    const realizedTasks = {};

    // Initialisation du compteur pour chaque intervenant
    intervenants.forEach(i => {
      realizedTasks[i.IdIntervenant] = 0;
    });

    // Comptage des tâches "Réalisée" pour chaque intervenant
    interventions.forEach(intervention => {
      if (intervention.Etat.toLowerCase() === "réalisée") {
        if (realizedTasks.hasOwnProperty(intervention.IdIntervenant)) {
          realizedTasks[intervention.IdIntervenant]++;
        }
      }
    });

    // Préparation des labels et des données pour le diagramme en barres
    const labelsBar = intervenants.map(i => i.Nom + " " + i.Prenom);
    const counts = intervenants.map(i => realizedTasks[i.IdIntervenant]);

    const ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: labelsBar,
        datasets: [{
          label: 'Nombre de tâches réalisées',
          data: counts,
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0 // Afficher des nombres entiers
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Tâches réalisées par intervenant'
          }
        }
      }
    });

    // -------------------------------
    // Diagramme en secteur : Répartition des tâches (Réalisées vs En attente)
    // -------------------------------
    let realizedCount = 0;
    let pendingCount = 0;
    interventions.forEach(intervention => {
      if (intervention.Etat.toLowerCase() === "réalisée") {
        realizedCount++;
      } else if (intervention.Etat.toLowerCase() === "en attente") {
        pendingCount++;
      }
    });

    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
      type: 'pie',
      data: {
        labels: ['Réalisée', 'En attente'],
        datasets: [{
          data: [realizedCount, pendingCount],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Répartition des tâches'
          }
        }
      }
    });
// --------------------------------------------------
    // Courbe (Line Chart) : Évolution des interventions sur une période
    // --------------------------------------------------
    // Agrégation des interventions par date
    const interventionsByDate = {};
    interventions.forEach(intervention => {
      const date = intervention.Date;
      interventionsByDate[date] = (interventionsByDate[date] || 0) + 1;
    });

    // Tri chronologique des dates
    const sortedDates = Object.keys(interventionsByDate).sort();
    const countsLine = sortedDates.map(date => interventionsByDate[date]);

    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
      type: 'line',
      data: {
        labels: sortedDates,
        datasets: [{
          label: 'Nombre d\'interventions',
          data: countsLine,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: { display: true, text: 'Date' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Nombre d\'interventions' }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Évolution des interventions au cours du temps'
          }
        }
      }
    });