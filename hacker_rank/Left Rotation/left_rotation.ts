

//create function for left rotation
function leftRotation(arr: number[], d: number): number[] {
    //create new array
    let newArr:number[] = [];
    let n:number = arr.length;
    for(let i = 0; i < arr.length; i++){
        //add to new array
        newArr[(i+n-d)%n] = arr[i];
    }
    //return new array
    return newArr;
}
