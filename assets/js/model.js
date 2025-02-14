

  function openModal(action, type) {
    document.getElementById('modalTitle').innerText = action === 'add' ? `Ajouter ${type}` : `Modifier ${type}`;

    const nameField = document.getElementById('nameField');
    const surnameField = document.getElementById('surnameField');
    const directionField = document.getElementById('directionField');
    const postField = document.getElementById('postField');
    const interventionFields = document.getElementById('interventionFields');

    if (type === 'intervention') {
      nameField.style.display = 'none';
      surnameField.style.display = 'none';
      directionField.style.display = 'none';
      postField.style.display = 'none';
      interventionFields.style.display = 'block';
    } else {
      nameField.style.display = 'block';
      surnameField.style.display = 'block';
      directionField.style.display = type === 'client' ? 'block' : 'none';
      postField.style.display = type === 'intervenant' ? 'block' : 'none';
      interventionFields.style.display = 'none';
    }
    document.getElementById('modal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
