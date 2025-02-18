function generatePDF(tableId) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Ajouter un titre
    doc.text('Titre de la Table', 20, 20);

    // Ajouter la table avec des options personnalisées
    doc.autoTable({
        html: `#${tableId}`,
        startY: 30,
        theme: 'grid',
        styles: { fontSize: 10 },
        headStyles: { fillColor: [22, 160, 133] },
    });

    doc.save('table.pdf');
}
