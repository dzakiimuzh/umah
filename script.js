const drops1 = document.getElementsByClassName('drop1');
const drops2 = document.getElementsByClassName('drop2');
const drops3  = document.getElementsByClassName('drop3');


// function click(){

//     const buy = document.getElementById('buy').textContent = this.innerText;

// }

// for( let i = 0; i < drops.length; i++ ){

//     drops[i].onclick = click;

// }

for( let i = 0; i < drops1.length; i++ ){

    drops1[i].addEventListener('click', function(){

        const buy = document.getElementById('buy').textContent = this.innerText;


    });

}

for( let j = 0; j < drops2.length; j++ ){

    drops2[j].addEventListener('click', function(){


        const price = document.getElementById('price').textContent = this.innerText;

    });


}

for( let k = 0; k < drops3.length; k++ ){

    drops3[k].addEventListener('click', function(){

        const city = document.getElementById('city').textContent = this.innerText;


    });

}






// // manipulasi node
// // buat elemen baru
// const pBaru = document.createElement('p');
// const teks = document.createTextNode('paragraf Baru');
// //simpan tulisan kedalam paragraf
// pBaru.appendChild(teks);
// // simpan pBaru di akhir section a
// const sectiona = document.getElementById('a');
// sectiona.appendChild(pBaru);
