function populateUFs(){
    const ufSelect= document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then( states => {
        for(const state of states){
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
        }
    })

}

populateUFs();

function getCities(event){
   const citySelect = document.querySelector("[name=city]");
   const stateInput = document.querySelector("[name=state]");

    const ufValue = event.target.value;
   
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;
    
    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true;

    fetch(url)
    .then( res => res.json())
    .then( cities => {
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false;
    })

};

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities);



// ITEMS COLECT
const collectedItems = document.querySelector("input[name=items]");
let selectedItems = [];

const itemsToCollect = document.querySelectorAll(".items-grid li");

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem);
}

function handleSelectedItem(event){
    const itemLi = event.target

    itemLi.classList.toggle("selected");

    const itemId = itemLi.dataset.id;
    // Procurar item para ver se existe
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    })

    if( alreadySelected >= 0){
        // tirar de selecao
        const filteredItems = selectedItems.filter( item => {
            const itemIsDiferrent = item != itemId
            return itemIsDiferrent
        })
        selectedItems = filteredItems;
    }else{
        // se não estiver selecionado
        // adicionar á selecão
        selectedItems.push(itemId);
    }
    // Atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems;

}

