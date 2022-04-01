
function hourglassSum(arr: number[][]): number {
    let maxSum = 0;
    for (let i = 0; i < 4; i++){
        for (let j = 1; j < 5; j++){
            let sum = arr[i][j - 1] + arr[i][j] + arr[i][j + 1] +
                arr[i + 1][j]
                + arr[i + 2][j - 1] + arr[i + 2][j] + arr[i + 2][j + 1]
            if (i === 0 && j === 1){
                maxSum = sum;
            }
            else if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;

   
}