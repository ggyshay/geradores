const names = [
    "Isabella", "Isabelle", "Isadora", "Isaías",
    "Enrique", "Enzo", "Erasmo", "Eri",
    "André", "Andréa",
    "Aluísio", "Álvaro", "Alzira",
    "Barbra", "Bartira", "Bartolomeu", "Basílio",
    "Camila", "Camile",
    "Clayton", "Cléa",
    "Davi", "David", "Daya",
    "Diego", "Diella", "Dimitri",
    "Édison", "Edite", "Edith", "Edmundo",
    "Elizabete",
    "Fábio", "Fabíola", "Fabrícia", "Fabrício", "Fabrizio", "Fanny", "Fátima", "Fausta",
    "Gilmara", "Gilson", "Gina", "Gioconda",
    "Igor", "Ike", "Ilana", "Ilda",
    "Jamil", "Jamila", "Janaína", "Jandir",
    "Kaleb", "Kalil", "Kalila", "Kaori",
    "Lalita", "Lalo", "LanaLara",
    "Madalena", "Mafalda", "Magali", "Magda",
    "Mônica", "Monique", "Morgana",
    "Natasha", "Nathalia", "Nathalie", "Nathanael",
    "Oswaldo", "Otávia", "Otávio", "Oto",
    "Pamela", "Pandora", "Paola", "Paolo",
    "Rossana", "Roxana", "Roxane", "Rubem",
    "Sheila", "Sheilla", "Shen", "Shirlei",
    "Talita", "Tamara", "Tancredo", "Tânia",
    "Vivian", "Viviana", "Viviane", "Vivien",
    "Zoe", "Zoey", "Zora", "Zoraide",
];

function randomName() {
    const r = Math.floor(Math.random() * names.length);
    return names[r];
}

console.log(randomName());