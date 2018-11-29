import { db } from '../db';

let itemsRef = db.ref('/items')

export const getData = (stateName) => {
    itemsRef.on('value', (snapshot) => {
        let data = snapshot.val();
        let stateName = Object.values(data);
        this.setState({stateName});
    });
}

export const addData = (data) => {
    itemsRef.push({
        name:data
    })
}