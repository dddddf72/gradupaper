package twonumsums;

public class sums {
	public int[] twoSum(int[],int target){
		int len = nums.length;
		for(int i=0;i<len-1;i++){
			for(int j=j+1;j<len;j++){
				if(nums[i]+nums[j]==target){
					return new int[]{i,j};
				}
			}
		}
		throw new IllegalArgumentException("no two sum solution");
	}
}
