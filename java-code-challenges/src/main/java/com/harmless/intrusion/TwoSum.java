package com.harmless.intrusion;

import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        // Add each number to the Hash Map
        Map<Integer, Integer> searchedNumbers = new HashMap();
        // As you add them into the map, check to see if it's compliment is in the map
        for(int i = 0; i< nums.length; i++){
            int curr = nums[i];
            int remainder = target-curr;
            if(searchedNumbers.containsKey(remainder)){
                return new int[]{searchedNumbers.get(remainder), i};
            }
            else{
                searchedNumbers.put(curr,i);
            }
        }
        return new int[2];
    }
}
