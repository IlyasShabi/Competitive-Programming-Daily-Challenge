//https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/practice-problems/algorithm/greedy-algorithms/


import java.io.BufferedReader; 
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
public class TestClass {
	public static void main(String[] args) throws IOException {
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		int test= Integer.parseInt(br.readLine());
		while(test-- >0){
			ArrayList<Long> temp = new ArrayList<Long>();
			String[] line = br.readLine().split(" ");
			int a = Integer.parseInt(line[0]);
			long b = Long.parseLong(line[1]);
			String[] line2 = br.readLine().split(" ");
			int total=0;
			long max=0;
			for(int i=0;i<line2.length;i++){
				temp.add(Long.parseLong(line2[i]));
			}
			Collections.sort(temp);
			for(int i=0;i<temp.size();i++){
				max += temp.get(i);
				if(max >= b)
					break;
				total++;
			}
			System.out.println(total);
			temp.clear();
		}	 
	}
	
}
