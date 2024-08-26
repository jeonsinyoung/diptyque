document.addEventListener(`DOMContentLoaded`, function () {

    const scrollEvent1 = () => {
        window.addEventListener(`scroll`, function () {
            const scrollTopData = window.scrollY;
            console.log(scrollTopData)

            const header = document.querySelector(`header`);
            const logo = document.querySelector(`.logo`);
        
            const sec1Title = document.querySelector(`.sec1_title`);
            const pctxtBox1 = document.querySelector(`.sec1_pc .t_box1 span`);
            const pctxtBox2 = document.querySelector(`.sec1_pc .t_box2 span`);
            const pctxtBox3 = document.querySelector(`.sec1_pc .t_box3 span`);


            const sec1Img = document.querySelector(`.sec1_img`);
            const s1Txt1 = document.querySelector(`.s1_txt1`);
            const s1Txt2 = document.querySelector(`.s1_txt2`);
            const txtBtn = document.querySelector(`.txt_btn`);
        
            if (scrollTopData >= 300) {
                header.classList.add(`on`);
                logo.classList.add(`on`);
                pctxtBox1.classList.add(`active`);
                pctxtBox2.classList.add(`active`);
                pctxtBox3.classList.add(`active`);
                sec1Title.classList.add(`on`);
                sec1Img.classList.add(`active`);
                s1Txt1.classList.add(`active`);
                s1Txt2.classList.add(`active`);
                txtBtn.classList.add(`active`);

            } else {
                header.classList.remove(`on`)
                logo.classList.remove(`on`);
                pctxtBox1.classList.remove(`active`);
                pctxtBox2.classList.remove(`active`);
                pctxtBox3.classList.remove(`active`);
                sec1Img.classList.remove(`active`);
                s1Txt1.classList.remove(`active`);
                s1Txt2.classList.remove(`active`);
                txtBtn.classList.remove(`active`);
            }

            const itemWrap = document.querySelector(`.item_wrap`)
            const mX1 = document.querySelector(`.i_w2`)
            const mX2 = document.querySelector(`.i_w3`)

            if (scrollTopData >= 500){
                itemWrap.classList.add(`active`)
                mX1.classList.add(`active`)
                mX2.classList.add(`active`)
            } else {
                itemWrap.classList.remove(`active`)
                mX1.classList.remove(`active`)
                mX2.classList.remove(`active`)
            }

            const tB1 = document.querySelector(`.t_b_1`)
            const tB2 = document.querySelector(`.t_b_2`)
            const tB3 = document.querySelector(`.t_b_3`)
            const downImg = document.querySelector(`.down_img`)
            const upImg = document.querySelector(`.up_img`)

            if (scrollTopData >= 700){
                tB1.classList.add(`active`)
                tB2.classList.add(`active`)
                tB3.classList.add(`active`)
                downImg.classList.add(`active`)
                upImg.classList.add(`active`)
            } else {
                tB1.classList.remove(`active`)
                tB2.classList.remove(`active`)
                tB3.classList.remove(`active`)
                downImg.classList.remove(`active`)
                upImg.classList.remove(`active`)
            }

            const txtWrap = document.querySelector(`.txt_wrap`)
            const object1 = document.querySelector(`.object1`)
            const object2 = document.querySelector(`.object2`)
            const object3 = document.querySelector(`.object3`)
            const object4 = document.querySelector(`.object4`)

            
            if(scrollTopData >= 1200){
                txtWrap.classList.add(`active`)
                object1.classList.add(`active`)
                object2.classList.add(`active`)
                object3.classList.add(`active`)
                object4.classList.add(`active`)
            }else{
                txtWrap.classList.remove(`active`)
                object1.classList.remove(`active`)
                object2.classList.remove(`active`)
                object3.classList.remove(`active`)
                object4.classList.remove(`active`)
            }

            const txtRight = document.querySelector(`.sec5 h2`)
            const imgBox1 = document.querySelector(`.img_box1`)
            const imgBox2 = document.querySelector(`.img_box2`)
            const imgBox3 = document.querySelector(`.img_box3`)
            const imgBox4 = document.querySelector(`.img_box4`)

            if(scrollTopData >= 1600){
                txtRight.classList.add(`active`)
                imgBox1.classList.add(`active`)
                imgBox2.classList.add(`active`)
                imgBox3.classList.add(`active`)
                imgBox4.classList.add(`active`)

            }else{
                txtRight.classList.remove(`active`)
                imgBox1.classList.remove(`active`)
                imgBox2.classList.remove(`active`)
                imgBox3.classList.remove(`active`)
                imgBox4.classList.remove(`active`)
            }

            const txt6Box = document.querySelector(`.txt6_box`)
            const gift1 = document.querySelector(`.gift_1`)
            const gift2 = document.querySelector(`.gift_2`)
            const gift3 = document.querySelector(`.gift_3`)

            if(scrollTopData >= 1900){
                txt6Box.classList.add(`active`)
                gift1.classList.add(`active`)
                gift2.classList.add(`active`)
                gift3.classList.add(`active`)

            }else{
                txt6Box.classList.remove(`active`)
                gift1.classList.remove(`active`)
                gift2.classList.remove(`active`)
                gift3.classList.remove(`active`)
            }

            const txt7Box = document.querySelector(`.txt7_box`)
            const paris1 = document.querySelector(`.paris_1`)
            const paris2 = document.querySelector(`.paris_2`)
            const paris3 = document.querySelector(`.paris_3`)

            if(scrollTopData >= 2300){
                txt7Box.classList.add(`active`)
                paris1.classList.add(`active`)
                paris2.classList.add(`active`)
                paris3.classList.add(`active`)

            }else{
                txt7Box.classList.remove(`active`)
                paris1.classList.remove(`active`)
                paris2.classList.remove(`active`)
                paris3.classList.remove(`active`)
            }

            const logo2 = document.querySelector(`.logo2`)

            if(scrollTopData >= 2700){
                logo2.classList.add(`on`)

            }else{
                logo2.classList.remove(`on`)
            }

        })

    }

    const scrollEvent2 = () => {
        window.addEventListener(`scroll`, function () {
            const scrollTopData = window.scrollY;
            console.log(scrollTopData)

            const header = document.querySelector(`header`);
            const logo = document.querySelector(`.logo`);
            const cartIcon = document.querySelector(`.cart2`);
            const menuIcon = document.querySelector(`.menu2`);
        
            const sec1 = document.querySelector(`.sec1`);
            const sec1Title = document.querySelector(`.sec1_title`);
            const pctxtBox1 = document.querySelector(`.sec1_pc .t_box1 span`);
            const pctxtBox2 = document.querySelector(`.sec1_pc .t_box2 span`);
            const pctxtBox3 = document.querySelector(`.sec1_pc .t_box3 span`);
            const mtxtBox1 = document.querySelector(`.sec1_mobile .t_box1 span`);
            const mtxtBox2 = document.querySelector(`.sec1_mobile .t_box2 span`);
            const mtxtBox3 = document.querySelector(`.sec1_mobile .t_box3 span`);

        
            const sec1Offset = sec1.offsetTop;
        
            if (scrollTopData >= sec1Offset) {
                header.classList.add(`on`);
                logo.classList.add(`on`);
                cartIcon.classList.add(`on`);
                menuIcon.classList.add(`on`);
                sec1Title.classList.add(`on`);
                pctxtBox1.classList.add(`active`);
                pctxtBox2.classList.add(`active`);
                pctxtBox3.classList.add(`active`);
                mtxtBox1.classList.add(`active`);
                mtxtBox2.classList.add(`active`);
                mtxtBox3.classList.add(`active`);
            } else {
                header.classList.remove(`on`)
                logo.classList.remove(`on`)
                cartIcon.classList.remove(`on`);
                menuIcon.classList.remove(`on`);
                sec1Title.classList.remove(`on`);
                pctxtBox1.classList.remove(`active`);
                pctxtBox2.classList.remove(`active`);
                pctxtBox3.classList.remove(`active`);
                mtxtBox1.classList.remove(`active`);
                mtxtBox2.classList.remove(`active`);
                mtxtBox3.classList.remove(`active`);
            }

        })

    }


    const topBtn = document.querySelector(`.up_btn`);
    topBtn.addEventListener(`click`, function () { 
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        });
    });



    function toggleScrollTrigger() {
    const windowWidth = window.innerWidth;

        const hoffset = document.querySelector(`.hOffset`)
        hoffset.classList.add(`on`);

        if (windowWidth >= 1730) {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".sec");

        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
            trigger: ".h-container",
            pin: true,
            scrub: 0.1,
            end: "+=3000"
            }
        });

        gsap.set(".box-1, .box-2", {y: 100});

        gsap.to(".box-1", {
        y: -130,
        duration: 2,
        ease: "elastic",
        scrollTrigger: {
            trigger: ".box-1",
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reset",
            id: "1",
        }
        });

        gsap.to(".box-2", {
        y: -120,
        ease: "none",
        scrollTrigger: {
            trigger: ".box-2",
            containerAnimation: scrollTween,
            start: "center 80%",
            end: "center 20%",
            scrub: true,
            id: "2"
        }
        });
            
        scrollEvent1();

        var swiper = new Swiper(".mySwiper", {
            loop: true,
            direction: "vertical",
            speed: 2000,
            autoplay: {
                delay: 0
            }
        });

        AOS.init();


    } else {
        hoffset.classList.remove(`on`);
        scrollEvent2();
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            direction: "vertical",
            speed: 2000,
            autoplay: {
                delay: 0
            }
        });

        var swiper = new Swiper(".mySwiper_5", {
            loop: true,
            effect: "fade",
            autoplay: {
                delay: 1500
            },
        });

        AOS.init();
    }
  }

  toggleScrollTrigger();




});

