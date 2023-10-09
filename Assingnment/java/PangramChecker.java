import java.util.Scanner;

public class PangramChecker {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();

        boolean isPangram = checkIfPangram(sentence);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkIfPangram(String sentence) {
        boolean[] alphabetArray = new boolean[26];

        for (int i = 0; i < sentence.length(); i++) {
            char ch = Character.toLowerCase(sentence.charAt(i));
            if ('a' <= ch && ch <= 'z') {
                alphabetArray[ch - 'a'] = true;
            }
        }

        for (boolean isPresent : alphabetArray) {
            if (!isPresent) {
                return false;
            }
        }

        return true;
    }
}
