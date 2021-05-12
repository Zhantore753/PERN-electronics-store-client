import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ];
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Huawei'},
            {id: 4, name: 'Oppo'},
            {id: 5, name: 'Lenovo'},
            {id: 6, name: 'Asus'}
        ];
        this._devices = [
            {id: 1,	name:"12 Pro", price: 100000, rating:0, img:"http://localhost:5000/eb1627f0-1857-4588-b2be-a19c678c4f6c.jpg"},
            {id: 2,	name:"a51", price: 50000, rating:4.2, img:"http://localhost:5000/02fa97c9-b4b1-4f36-b030-6b382794cd17.jpg"},
            {id: 3,	name:"Fold", price: 120000, rating:5, img:"http://localhost:5000/2839bb29-4386-4945-a4ae-8a9661dc2881.jpg"},
            {id: 4,	name:"12 Pro", price: 100000, rating:3, img:"http://localhost:5000/eb1627f0-1857-4588-b2be-a19c678c4f6c.jpg"},
            {id: 5,	name:"a51", price: 50000, rating:1.2, img:"http://localhost:5000/02fa97c9-b4b1-4f36-b030-6b382794cd17.jpg"},
            {id: 6,	name:"Fold", price: 120000, rating:0, img:"http://localhost:5000/2839bb29-4386-4945-a4ae-8a9661dc2881.jpg"},
        ];
        this._selectedType = {};
        this._selectedBrand = {};
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
    setSelectedType(type){
        this._selectedType = type;
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand;
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
    get selectedType(){
        return this._selectedType;
    }
    get selectedBrand(){
        return this._selectedBrand;
    }
}