import java.util.*;

public class Shuffle {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(arr);

        System.out.println(Arrays.toString(arr));
    }

    public static void shuffleArray(int[] arr) {
        Random rand = new Random();

        for (int i = arr.length - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);

            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
