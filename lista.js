let patients = [
    { name: 'Paciente 1', priority: 'V' },
    { name: 'Paciente 2', priority: 'A' },
    { name: 'Paciente 3', priority: 'V' },
    { name: 'Paciente 4', priority: 'A' },
];

function displayPatients(patients) {
    patients.forEach(patient => {
        console.log(`${patient.name} - ${patient.priority === 'V' ? 'Verde' : 'Amarelo'}`);
    });
}

function sortPatients(patients) {
    patients.sort((a, b) => {
        if (a.priority === 'A' && b.priority === 'V') return -1;
        if (a.priority === 'V' && b.priority === 'A') return 1;
        return 0;
    });
}

console.log("Lista inicial de pacientes:");
displayPatients(patients);

sortPatients(patients);
console.log("\nLista de pacientes após a classificação:");
displayPatients(patients);

