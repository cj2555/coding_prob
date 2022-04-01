func hourglassSum(arr [][]int32) int32 {
    sum := int32(0)
    temp:= int32(0)
    for i:=0 ; i<4 ; i++ {
        for j:=1 ; j <5; j++ {
            temp=  arr[i][j-1] + arr[i][j] + arr[i][j+1] 
			+ arr[i+1][j] + arr[i+2][j-1] + arr[i+2][j] + 
			arr[i+2][j+1]

            if i ==0 && j==1{
                sum=temp
            }else{
                sum=max(sum,temp)
            }
        }
    }
    return sum
}