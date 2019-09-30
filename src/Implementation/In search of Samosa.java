//https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/practice-problems/algorithm/in-search-of-samosa-pledge-easy-3/

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
public class TestClass {
	public static void main(String[] args) throws IOException {
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		String[] line = br.readLine().split(" ");
		int n = Integer.parseInt(line[0]);
		int k = Integer.parseInt(line[1]);
		String[] temp = br.readLine().split(" ");
		ArrayList<Integer> array = new ArrayList<Integer>();
		for(int i=0;i<temp.length;i++){
			array.add(Integer.parseInt(temp[i]));
		}
		int cost = 0, count = 0;
		Collections.sort(array);
		for(int i=0; i<array.size();i++){
			cost+=array.get(i);
			if(cost > k){
				break;
			}
			count++;
		}
		System.out.println(count);
	}
	
}
