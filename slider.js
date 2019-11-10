//variabels
    	const carousel_block = document.querySelector('.slide-box');
    	const imgCollection = document.querySelectorAll('img');
        const prevBTN = document.querySelector('.prevBtn');
    	const nextBTN = document.querySelector('.nextBtn');
    	const txt = document.querySelector('#text');
    	let last = document.querySelector('#lastClone');
    	let first = document.querySelector('#firstClone');
    	let array = ['Nadine Ross', 'Nathan Drake', 'Raif', 'Sam Drake', 'Sully', 'Elena Fisher','Cassie Drake', 'Young Sam', 'Screen Shot #2'];
        let f = 1;
    	let b = 0;
    	let count = 1;
    	const size = imgCollection[0].clientWidth;
    	const img = imgCollection[f];

    	carousel_block.style.transform = 'translateX(' + (-size * count) + 'px)';

    	function Count() {
    		carousel_block.appendChild(img);
    	}

    	nextBTN.addEventListener('click', () => {
    	   if(count >= imgCollection.length) return Count();
    	   if(img.length >= 9) return Count();

    	   carousel_block.style.transition = 'transform 0.8s ease-in-out';
    	   carousel_block.style.transform = 'translateX(' + (-size * count) + 'px)';
    	   count++;
    	   f++;
    	   txt.textContent = array[b];
    	   b++;
    	   nextBTN.classList.add('hid');
    	   setTimeout(() => {
              nextBTN.classList.remove('hid');
    	   }, 1000);
    	});

    	prevBTN.addEventListener('click', () => {
    	   if(count <= 0) return Count(); 
    	   if(img.length == 0) return Count();

           carousel_block.style.transition = 'transform 0.8s ease-in-out';
           carousel_block.style.transform = 'translateX(' + (-size * count) + 'px)';
           count--;
           f = 9;
           f--;
           txt.textContent = array[b];
           b--;
           prevBTN.classList.add('hid2');
           setTimeout(() => {
              prevBTN.classList.remove('hid2');
           }, 1000);
    	});

     	carousel_block.addEventListener('transitionend', () => {	
           if(imgCollection[count] === last) {
              carousel_block.style.transition = 'none';
              count = imgCollection.length - 2;
              b = array.length - 1;
              txt.textContent = array[b];
              b--;
              carousel_block.style.transform = 'translateX(' + (-size * count) + 'px)';
           }

           if(imgCollection[count] === first) {
           	  carousel_block.style.transition = 'none';
              count = imgCollection.length - 9;
              txt.textContent = array[b];
              arr.length = 0;
              b++;  
           	  carousel_block.style.transform = 'translateX(' + (-size * count) + 'px)';
           }
    	});