function PrintTable(num){
    for(let i = 0; i <= 10; i++){
        console.log('4' + '*' + i + '=' + num*i);
    }
}


const num = prompt('Enter a number');

PrintTable(num);
