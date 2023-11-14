// Функция для проверки длины строки.

let stringLength = function(string,number){
    let newString = string.replaceAll(" ","");
    if(newString.length<= number){
        return true
    }
    return false;
}
// Функция является ли строка палиндромом

let isPalindrome = function(string){
    let newString = string.replaceAll(" ","").toLowerCase();
    let palidrome = '';
    for(let i = 1; i<=newString.length;i++){
        palidrome+=newString[newString.length-i]
    }
    if(newString===palidrome){
        return true
    }
    return false;
}
// Функция  извлекает содержащиеся в ней цифры
let getNumber = function(string){
    let str =string.toString().replaceAll(" ","");
    let number = '';
    for(let i = 0; i<str.length;i++){
         if(str[i] == 0 ||
            str[i] == 1 ||
            str[i] == 2 ||
            str[i] == 3 ||
            str[i] == 4 ||
            str[i] == 5 ||
            str[i] == 6 ||
            str[i] == 7 ||
            str[i] == 8 ||
            str[i] == 9) {
                number+=str[i]
            }
        }
        return parseInt(number)
}
