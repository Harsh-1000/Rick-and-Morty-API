/**
 * Fetches a list of characters from the Rick and Morty API.
 * This function performs an asynchronous HTTP request to the API and retrieves the character data.
 * The data is returned as an array of character objects.
 * 
 * @async 
 * @returns {Promise<Object[]>} A promise that resolves to an array of character objects.
 */
async function getData() {
    const url = "https://rickandmortyapi.com/api/character";
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.results); 
        return json.results;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

/**
 * Fetches the list of characters from the Rick and Morty API and displays their details in a table.
 * This function calls `getData` to retrieve character data, and then iterates through the list to display
 * the name, status, and species of each character.
 * 
 * @async
 * @function showData
 */
async function showData()
{
    const allData = await  getData();
    allData.forEach( data => {
        addDataToDisplyTable(data.name,data.status,data.species);
    });
}

/**
 * Adds a row to the table with the provided character details (name, status, species).
 * This function inserts a new row in the table body, creating three cells for 
 * the name, status, and species of the character.
 * @param {string} name - The name of the character.
 * @param {string} status - The status of the character (e.g., Alive, Dead).
 * @param {string} species - The species of the character (e.g., Human, Alien).
 */
function addDataToDisplyTable(name,status,species)
{
    let table = document.getElementById('table-body');
    let row = table.insertRow(0);
    row.classList.add('table-tr');
    let cellName = row.insertCell(0);
    let cellRelation = row.insertCell(1);
    let cellAge = row.insertCell(2);

    cellName.innerHTML = name;
    cellRelation.innerHTML = status;
    cellAge.innerHTML = species;
}
