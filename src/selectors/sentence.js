export const phrase = (value) => {
    if (value === 0) return "La recherche n'a donné aucun résultat.";
    else if (value === 1) return "La recherche a donné 1 résultat.";
    else return `La recherche a donné ${value} résultats.`;
}