//Timeline of first page
var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0.5
})
tl.from("h4, #part2 button",{
    y:-20,
    opacity:0,
    duration:0.5,
    stagger:0.3
})
tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
})
tl.from(".center-part1 p",{
    x:-200,
    opacity:0,
    duration:0.4
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".center-part2 img",{
    x:200,
    opacity:0,
    duration:0.5
},"-=0.5")
tl.from(".page1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})



// Name animation on scrolling
gsap.to("#page2 h2",{
    transform:"translateX(-190%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})

// String animation
var initialPath = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`

var string = document.querySelector("#string")
string.addEventListener("mousemove", function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.offsetY} 990 100`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})


// cursor animation

var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (prop) => {
    gsap.to(cursor,{
        x: prop.clientX -5  ,
        y: prop.clientY -5, 
        duration:2,
        ease: "elastic.out(1,0.3)"
    })
});

//Marque animation
function marqueAnimation(){
    window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            gsap.to(".marque", {
                transform: "translateX(-200%)",
                repeat: -1,
                duration: 4,
                ease: "none"
            })
            gsap.to(".marque img", {
                rotate: 180
            })

        }
        else {
            gsap.to(".marque", {
                transform: "translateX(0%)",
                repeat: -1,
                duration: 4,
                ease: "none"
            })
            gsap.to(".marque img", {
                rotate: 0
            })
        }
    })
}
marqueAnimation()
