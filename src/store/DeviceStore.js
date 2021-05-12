import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'}
        ];
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ];
        this._devices = [
            {id: 1,	name:"12 Pro", price: 100000, rating:0, img:"eb1627f0-1857-4588-b2be-a19c678c4f6c.jpg"},
            {id: 2,	name:"a51", price: 50000, rating:0, img:"02fa97c9-b4b1-4f36-b030-6b382794cd17.jpg"},
            {id: 3,	name:"Fold", price: 120000, rating:0, img:"2839bb29-4386-4945-a4ae-8a9661dc2881.jpg"},
        ]
        makeAutoObservable(this);
    }

    setTypes(types){
        this._types = types;
    }
    setBrands(brands){
        this._brands = brands;
    }
    setDevices(devices){
        this._devices = devices;
    }

    get types(){
        return this._types;
    }
    get brands(){
        return this._brands;
    }
    get devices(){
        return this._devices;
    }
}