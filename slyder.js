function Slider() {
	this.imageUrl = [];
	this.currentImageIndex=0;
	this. showPrevBtn=null;//document.querySelector('.show-prev'),
	this.showNextBtn=null;//document.querySelector('.show-next'),
	this.slideImage=null;//document.querySelector('.slide-img'),
this.start=function (elId){
		var that =this;

		var elSelector='#'+ elId;
	var el= document.querySelector(elSelector);

this.showPrevBtn=el.querySelector('.show-prev');
this.showNextBtn=el.querySelector('.show-next');
this.slideImage=el.querySelector('.slide-img');

		//subscribe to events
		this.showPrevBtn.addEventListener('click',function(e){
			that.onShowPrevBtnClick(e);
		});
		this.showNextBtn.addEventListener('click',function(e){
			that.onShowNextBtnClick();
		});

	//create images array
		this.imageUrl.push('https://lh3.googleusercontent.com/proxy/1FYIFCSmykVKtIQC71Y0CuyYXGy4dGA7c28XeW1Zr-qOWJ-qnbnBUWU2hvYvTt7E_HEafXELeirwAW8mzpl-MbMKzMjddaWB40-TJ1PPBOlDXuRftHYxAw-GEHXnnF6frKJd39Wvpg');
        this.imageUrl.push('https://sites.google.com/site/prirodaasaaaa/_/rsrc/1427888057198/lito/AQ_ZQE5pV-g.jpg');
        this.imageUrl.push('https://ukrainianpeople.us/wp-content/uploads/2018/06/9b2d876c8f7d.jpg');

        this.slideImage.src = this.imageUrl[this.currentImageIndex];
        this.showPrevBtn.disabled=true;
};
        this.onShowPrevBtnClick = function(e){
        	this.currentImageIndex--;
        	this.slideImage.src=this.imageUrl[this.currentImageIndex];
        	this.showPrevBtn.disabled=false;

        	//disable prev button if need
        	if(this.currentImageIndex===0){
        		showNextBtn.disabled=true;
        	}
        };

   this.onShowNextBtnClick=function(e){
        	this.currentImageIndex++;
        	this.slideImage.src=this.imageUrl[this.currentImageIndex];
        	this.showPrevBtn.disabled=false;
        };
        //disable next button if need
        if(this.currentImageIndex ===(this.imageUrl.length-1)){
        	this.showNextBtn.disabled=true;
        };

};
