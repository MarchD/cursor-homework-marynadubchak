function getChineseLetters() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(String.fromCharCode(Date.now()).slice(-5));
     }, 50)
    })
}


function getRandomChinese(length) {
    time = Date.now();
    return new Promise( async (resolve, reject) => {
        if (length <= 0 ) reject(new Error('Length is smaller than 0'));
        let i = 0;
        let result = '';
        while(i < length) {
        result += await getChineseLetters();
            i++;
        }
        time = Date.now() - time;
        resolve(result, time);
    })

} 


getRandomChinese(4).then(
    result => console.log(`result is: ${result}, time: ${time} ms`), 
    error => console.log(error.mesage) );





