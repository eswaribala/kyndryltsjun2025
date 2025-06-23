const fdSet=new Set<string>([
    "c1",
    "c2",
    "c3",
    "c4",
    "c5"
]);
const loanSet=new Set<string>([
    "c3",
    "c5",
    "c1",
    "c6",
    "c7"

]);

function intersection(fdSet:Set<string>, loanSet:Set<string>):Set<string> {
    const result=new Set<string>();
    for(const item of fdSet) {
        if(loanSet.has(item)) {
            result.add(item);
        }
    }
    return result;
}

function union(fdSet:Set<string>, loanSet:Set<string>):Set<string> {
    return new Set<string>([...fdSet,...loanSet]);    
}


const result=intersection(fdSet, loanSet);
console.log("Intersection of fdSet and loanSet:", Array.from(result).join(", "));

const unionResult=union(fdSet, loanSet);
console.log("Union of fdSet and loanSet:", Array.from(unionResult).join(", "));