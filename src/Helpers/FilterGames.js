import { Products } from "../Data/Products"; //import the Products data

export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(product => {
        if (product.name.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1) {
            return product;
        }  
    });
}

export const filterGamesByPlatform = (platformToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(product => {
        let found = false;
        product.category.forEach(platform => {
            if (platform.toUpperCase().indexOf(platformToBeSearched.toUpperCase()) !== -1) {
                found = true;
            }
        });
        if (found === true) {
            console.log(product)
            return product;
        } 
    });
}