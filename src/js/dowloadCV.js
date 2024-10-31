export default function DowloadCV() {
    const link = document.createElement('a');
    link.setAttribute('href', '/CV/Vinicius Teixeira Juste.pdf');
    link.setAttribute('download', 'Vinicius Teixeira Juste.pdf');
    link.click();
}