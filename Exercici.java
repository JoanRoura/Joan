import java.util.*;

public class Exercici {
	public static void main(String[] args) {
		Scanner kb = new Scanner(System.in);
        System.out.print("Introdueix 15 numeros negatius: ");                                                         
        int num = kb.nextInt();
        int contador = 0;
        while (contador < 15) {                           
        	if (num < 0) {
        		contador++; 
        		System.out.println(" El numero positiu es: " + (num*(-1)));    
        	}
        	else 
        		System.out.println("Introdueix un numero negatiu: ");    
   
        	System.out.print("Introdueix un altre numero negatiu: ");                                                         
       		num = kb.nextInt();
        }    
	}
}