let device={
    type:"Laptop",
    details:{
        model:"Lenovo LOQ 13",
        cpu:"Ryzen 7",
        cpuDetails:{
            model:"Ryzen 7 5800H",
            core:7,
            thread:14,
            gpu:"RTX 4060",
            ram:"32 Gb",
            ramDetails:{
                ramType:"DDR5",
                ramBusSpeed:"6000 MHz"
            }
        }
    }
}

// print the cpu model and ram speed
console.log(`${device.details.cpuDetails.model} 
${device.details.cpuDetails.ramDetails.ramBusSpeed}`);
