//1.
let num = 3.14159;
num.isFixed(2);
//2.
num = 42;
num.toString();
//3.
num = 123.456789;
num.toPrecision(5);
//4.
num = "10";
num = parseInt(num);
//5.
num = "5.4";
num = parseFloat(num);
//6.
isNaN("hello");
//7.
isFinite(100);
//8.
num = 255;
num.toString();
//9.
num = 0.000001;
num = num.toFixed(7);
//10.
parseInt("1010", 2);
//11.
num = 0.000123456;
num.toPrecision(3);
//12.
num = 0 / 0;
isNaN(num);
//13.
num = 1000000;
num.toExponential(2);
//14.
parseFloat("3.14some");
//15.
num = 16;
num.toString(2);
//16.
num = Infinity;
isFinite(num);
//17.
num = 1.23e-5;
num.toFixed(8);
//18
num = "777";
num = parseInt(num, 8);
//19
num = 123456.789;
num.toPrecision(4);
//20
isNaN(NaN);
//21
num = -10;
num.toString();
//22
num = "1.2e-3";
parseFloat(num);
//23
num = 1234.5678;
num = num.toFixed(2);
//24
isFinite(1 / 0);
//25
parseInt("FF", 16);
