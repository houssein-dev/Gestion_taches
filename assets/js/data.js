const data = {
    "intervenants": [
      {
        "IdIntervenant": 1,
        "Nom": "Dupont",
        "Prenom": "Jean",
        "Poste": "Technicien"
      },
      {
        "IdIntervenant": 2,
        "Nom": "Martin",
        "Prenom": "Claire",
        "Poste": "Ingénieur"
      },
      {
        "IdIntervenant": 3,
        "Nom": "Bernard",
        "Prenom": "Luc",
        "Poste": "Support IT"
      }
    ],
    "clients": [
      {
        "IdClient": 1,
        "Nom": "Durand",
        "Prenom": "Sophie",
        "Direction": "Finance"
      },
      {
        "IdClient": 2,
        "Nom": "Moreau",
        "Prenom": "Pierre",
        "Direction": "Ressources Humaines"
      },
      {
        "IdClient": 3,
        "Nom": "Petit",
        "Prenom": "Isabelle",
        "Direction": "Marketing"
      }
    ],
    "interventions": [
      {
        "Id": 1,
        "Date": "2024-06-01",
        "Type": "Soft",
        "Motive": "Mise à jour logiciel",
        "Etat": "En attente",
        "IdIntervenant": 1,
        "IdClient": 1
      },
      {
        "Id": 2,
        "Date": "2024-06-03",
        "Type": "Hard",
        "Motive": "Réparation matériel",
        "Etat": "Réalisée",
        "IdIntervenant": 2,
        "IdClient": 2
      },
      {
        "Id": 3,
        "Date": "2024-06-05",
        "Type": "Soft",
        "Motive": "Installation d'application",
        "Etat": "En attente",
        "IdIntervenant": 3,
        "IdClient": 3
      }
    ]
  };


