package com.harmless.intrusion;

import java.util.HashMap;
import java.util.Map;

public class LongestUniqueSubstring {
    public int lengthOfLongestSubstring(String s) {
        // Keep track of the largest substring
        int largestSubStringLength = 0;
        int start = 0;
        // Keep track of the characters position in the sting
        Map<Character, Integer> lastKnownCharacterPosition = new HashMap();
        // Iterate through the string
        char[] characters = s.toCharArray();
        for(int i =0; i< characters.length; i++){
            if(lastKnownCharacterPosition.containsKey(characters[i])){
                if(largestSubStringLength < i-start){
                    largestSubStringLength = i-start;
                }
                    start = lastKnownCharacterPosition.get(characters[i]) + 1;
            }
            lastKnownCharacterPosition.put(characters[i],i);
        }
        return largestSubStringLength;
    }
}
