const string = '<value=123><value=123><value=123><bla=123><try=354><value=123><value=123><ret=123><value=123><value=123><value=123><value=123>';
// 2° => Transforma essa string em um array de tags
function separaString(str) {
    return str.split('>').filter(item => item !== '').map((item) => item+='>');
}
// 3° => Pega apenas as tags do array cujo nome é 'value' 
function pegaTag(ar) {
    return ar.filter(item => item.includes('value'));
}
// 4° => Pega o numero em string e transforma em inteiro
function transformaInt(ar) {
    return ar.map((item, index) => {
        let valor = parseInt(item.slice(7,-1));
        item = item.slice(0,-4);
        return item+=(valor+index);
    });
}
console.log(transformaInt(pegaTag(separaString(string))));