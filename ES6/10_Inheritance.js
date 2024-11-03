class Product{
    constructor(brandName,cpu){
        this.brandName=brandName
        this.cpu=cpu
    }
}

class Desktop extends Product{
    constructor(brandName,cpu,psu){
        super(brandName,cpu)
        this.psu=psu
    }
}

let d1=new Desktop("Custom","Ryzen 9 7950x","MSI 1000 Watt")
console.log(d1);
