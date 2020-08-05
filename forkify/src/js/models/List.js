import uniqid from 'uniqid';

export default class List{
    constructor(){
        this.items = [];
    }

    addItem(count, unit, ingedient){
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
    }

    deleteItem(id){
        const index = this.items.findIndex(el => el.id === id);//return the id
        //[2,4,8] splice(1,1) --> return 4 , original array [2,8]
        this.splice(index,1);
    }

    updateCount(id, newCount){
        this.items.find(el => el.id === id).count = newCount//retur the item
        
    }
}