
const readLineSync = require('readline-sync');
const welcomeNote = () =>
{
console.log("Welcome to the Binary/Decimal/Hex/Octal Converter  \n\nWhat you wish to try\n1. Binary to decimal \n2. hex to decimal\n3. octal to decimal\n4. Decimal to Binary\n5. Decimal to Octal\n6. Decimal to hex\n7. Binary to hex\n8. Binary to Octal\n9. Hex to Binary\n10. Hex to octal\n11. Octal to Binary\n12. Octal to Hex\n\n");
}

const takeInput = () =>
{
  const userInput = readLineSync.question('Your Choice---> ');
  if(userInput==1)
  {
      console.log("Binary To Decimal");
      console.log(binarytoDecimal());
   }

  else if(userInput==2)
  {
     console.log("HexaDecimal To Decimal");
     console.log(hextoDecimal());
  }

  else if(userInput==3)
  {
     console.log("Octal To Decimal");
     console.log(octaltoDecimal());
  }

  else if(userInput==4)
  {
     console.log("Decimal To Binary");
    console.log(decimaltoBinary());
  }

  else if(userInput==5)
  {
    console.log("Decimal To Octal");
    console.log(decimaltoOctal());
  }

  else if(userInput==6)
  {
    console.log("Decimal To HexaDecimal");
    console.log(decimaltoHex());
  }

  else if(userInput==7)
  {
    console.log("Binary To Hexadecimal");
    console.log(binarytoHex());
  }

  else if(userInput==8)
  {
    console.log("Binary To Octal");
    console.log(binarytoOctal());
  }

  else if(userInput==9)
  {
    console.log("Hexadecimal To Binary");
    console.log(hextoBinary());
  }

  else if(userInput==10)
  {
    console.log("Hexadecimal To Octal");
    console.log(hextoOctal());
  }

  else if(userInput==11)
  {
    console.log("Octal To Binary");
    console.log(octaltoBinary());
  }
  
  else if(userInput==12)
  {
    console.log("Octal To HexaDecimal");
    console.log(octaltoHex());
  }


  else
  {
    console.log("INVALID !!!!");

  }

}

function binarytoDecimal()
{
   const  binaryNum = readLineSync.question('Enter string for conversion\n');
   const digit = parseInt(binaryNum,2) ;
   console.log("Converted number");
   return digit;
}

function hextoDecimal()
{
   const  hexNum = readLineSync.question('Enter string for conversion\n');
   const digit = parseInt(hexNum,16) ;
   console.log("Converted number");
   return digit;
}

function octaltoDecimal()
{
   const  octalNum = readLineSync.question('Enter string for conversion\n');
   const digit =  parseInt(octalNum,8);
   console.log("Converted number");
   return digit;
}

function decimaltoBinary()
{
   const  decimallNum = parseInt(readLineSync.question('Enter string for conversion\n'));
   const digit= (decimallNum).toString(2);
   console.log("Converted number");
   return digit;
}

function decimaltoOctal()
{
   const  decimallNum = parseInt(readLineSync.question('Enter string for conversion\n'));
   const digit= (decimallNum).toString(8);
   console.log("Converted number");
   return digit;
}

function decimaltoHex()
{
   const  decimallNum = parseInt(readLineSync.question('Enter string for conversion\n'));
   const digit= (decimallNum).toString(16);
   console.log("Converted number");
   return digit;
}

function binarytoHex()
{
   const  binaryNum = parseInt(readLineSync.question('Enter string for conversion\n'));
   let digit=parseInt(binaryNum,2);
   digit= (digit).toString(16);
   console.log("Converted number");
   return digit;
}

function binarytoOctal()
{
   const  binaryNum = parseInt(readLineSync.question('Enter string for conversion\n'));
   let digit=parseInt(binaryNum,2);
   digit= (digit).toString(8);
   console.log("Converted number");
   return digit;
}

function hextoBinary()
{
   const  hexNum = parseInt(readLineSync.question('Enter string for conversion\n'));
   let digit=parseInt(hexNum,16);
   digit= (digit).toString(2);
   console.log("Converted number");
   return digit;
}

function hextoOctal()
{
   const  hexNum = parseInt(readLineSync.question('enter   hex string\n'));
   let digit=parseInt(hexNum,16);
   digit= (digit).toString(8);
   console.log("Converted number");
   return digit;
}

function octaltoBinary()
{
   const  octalNum = parseInt(readLineSync.question('enter octal string\n'));
   let digit=parseInt(octalNum,8);
   digit= (digit).toString(2);
   console.log("Converted number");
   return digit;
}

function octaltoHex()
{
   const  octalNum = parseInt(readLineSync.question('enter octal string\n'));
   let digit=parseInt(octalNum,8);
   digit= (digit).toString(16);
   console.log("Converted number");
   return digit;
}





function driver()
{
 welcomeNote();
   
 takeInput();
}

driver();