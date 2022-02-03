let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"



function aclean (arrStr) {

let anagrams = new Map();


for (let i = 0 ; i < arrStr.length; i++) {

        // check includes in map
        allMatch = false;
        let iSet = new Set(Array.from(arrStr[i]).map((value) => value.toUpperCase()).sort());

        for (let item of anagrams.values()) {
            if (item.size == iSet.size) {
                
                allMatch = true;
                for (let char of item.values()) {  
                     
                    if (iSet.has(char) == false) {
                       allMatch = false;
                    }  
                
                }  
                if (allMatch) break;            
            }       
        }            

        if (allMatch == false) {
            anagrams.set(arrStr[i], iSet);
        }

    }

     return Array.from(anagrams.keys());      

}