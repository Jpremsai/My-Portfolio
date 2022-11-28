function myFunction() {
    var x = document.getElementById('nav');
    var y = document.getElementsByClassName('icon')[0]
    console.log(x)
    if (x.className === "nav-bar") {
      x.className +=' responsive'
      y.innerHTML = '<i class="far fa-times-square"></i>'
    } else {
      x.className = "nav-bar";
      y.innerHTML = '<i class="fa fa-bars"></i>'
    }
    }

  class TypeWriter {
    constructor(txtEle, words, wait = 3000){
        this.txtEle = txtEle;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDel = false;
    }
    type(){
    const index = this.wordIndex % this.words.length;
    const fullTxt = this.words[index]
    if(this.isDel){
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1) 
    }

    this.txtEle.innerHTML = `<span class='txt'>${this.txt}</span>`

    let typeSpeed = 300;
    if(this.isDel){
        typeSpeed /= 2;
    }
    if(!this.isDel && this.txt === fullTxt){
        typeSpeed = this.wait;
        this.isDel = true;
    } else if (this.isDel && this.txt === ''){
        this.isDel = false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
   }
   }

   document.addEventListener('DOMContentLoaded', init);

   function init(){
    const txtEle = document.querySelector('#type');
    const words = JSON.parse(txtEle.getAttribute('data-words'));
    const wait = txtEle.getAttribute('data-wait')
    new TypeWriter(txtEle, words, wait)
}
