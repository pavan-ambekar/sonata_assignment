package com.sonata;

public class Bank {
	int accNo;
	String accName;
	double balance;
	Bank(){}
	Bank(int a, String n, double b){
		this.accName = n;
		this.accNo = a;
		this.balance = b;
	}
	
	public void deposite(double bal) {
		this.balance += bal;
		System.out.println("deposite: " + balance);
	}
	
	public void withDraw(double a) {
		this.balance -= a;
		System.out.println("withdraw: " + balance);
	}
	
	public void display() {
		System.out.println(accNo);
	}
	
	public static void main(String[] args) {
		Bank b1 = new Bank();
		b1.accName = "Pavan A";
		b1.accNo = 7896;
		b1.balance = 6787.3;
		
	}
}
