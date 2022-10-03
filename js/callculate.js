const PlayerArray = [];

function displayPlayerName(players) {
    const tableBody = document.getElementById('players-name');
    tableBody.innerHTML = '';
    // console.log(players.length);
    for (let i = 0; i <= players.length; i++){
        // console.log(PlayerArray[i].playerName);
        if (i >= 5) {
            break;
        }

        const name = PlayerArray[i].playerName;
        // console.log(name);

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);
    }

    
}


function selectFavPlayer(element) {
    // console.log('clicked');
    const playersName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);


    const playerObj = {
        playerName: playersName
        
    }
    PlayerArray.push(playerObj);

    // console.log(PlayerArray);
    // console.log(PlayerArray.length);

    const totalSelectedPlayer = document.getElementById('slect-player');
    totalSelectedPlayer.innerText = PlayerArray.length;
    console.log(PlayerArray.length);



    displayPlayerName(PlayerArray);


    
}


document.getElementById('totall-player-cost').addEventListener('click', function (cost) {
    const perPlayerCost = document.getElementById('per-player-cost');
    const perPlayerCostString = perPlayerCost.value;
    const onePlayerConst = parseFloat(perPlayerCostString);
    console.log(perPlayerCostString);

    const totalPlayerExpense = document.getElementById('total-player-expense');
    totalPlayerExpense.innerText = onePlayerConst * 5;


    perPlayerCost.value = '';


    return totalPlayerExpense;


})

document.getElementById('btn-total-calculate').addEventListener('click', function totall(totalPlayerExpense) {
    const managerCost = document.getElementById('manager-cost');
    const managerCostString = managerCost.value;
    const manager = parseFloat(managerCostString);

    const coachCost = document.getElementById('coach-cost');
    const coachCostString= coachCost.value;
    const coach = parseFloat(coachCostString);

    const cost = manager + coach + 5000;


    const allCost = document.getElementById('all-cost');
    allCost.innerText = cost;


    managerCost.value = '';
    coachCost.value = '';
})

