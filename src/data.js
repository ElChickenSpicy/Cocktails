async function makeRequest(query) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?${query}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch(err) {
        alert(err);
    }
}

export function getInitialCocktails() {
    const initialIDs = ['11001', '11003', '11006', '11728', '11007', '17212', '11417', '11008', '178325', '11000', '11113', '11009'];
    let initialCocktails = [];

    initialIDs.forEach(async id => {
        let returnedObject = await makeRequest(`i=${id}`);
        initialCocktails.push(returnedObject.drinks[0]);
    });

    return initialCocktails;
}