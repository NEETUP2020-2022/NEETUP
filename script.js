// JavaScript Document

var d = document, aEL = "addEventListener", qS = "querySelector", qSA = "querySelectorAll",
    main = d[qS]("main"), intro = d[qS](".intro"), content = d[qS](".content"), overlay = d[qS]("#overlay"),
    storyBox = d[qSA](".calldata"), allStory = d[qSA](".story"), mainBtn = d[qS]("#to_main"), introBtn = d[qS]("#to_intro"), closeBtn = d[qSA](".closebtn"),
    box1 = d[qS]("#box1"), box2 = d[qS]("#box2"), box3 = d[qS]("#box3"), box4 = d[qS]("#box4");

/*box2.onmouseenter = function () {
    box1.classList.add("delay");
};
box2.onmouseout = function () {
    box1.classList.remove("delay");
};
box4.onmouseenter = function () {
    box3.classList.add("delay");
};
box4.onmouseout = function () {
    box3.classList.remove("delay");
};*/
window.onkeydown = function (e) {
    if (overlay.classList.contains("active") && e.key === "Escape") {
        d.body.style.overflow = "auto";
        overlay.classList.remove("active");
        allStory.forEach(e => e.classList.remove("active"));
    }
};

//mainBtn[aEL]("click", toggleMain);
//introBtn[aEL]("click", toggleMain);
storyBox.forEach((e, i) => e[aEL]("click", function () {readStory(e, i);}));
closeBtn.forEach((e, i) => e[aEL]("click", function () {closeStory(e, i);}));

function toggleMain() {
    main.classList.toggle("on");
    intro.classList.toggle("hidden");
    content.classList.toggle("hidden");
}

function readStory(e, i) {
    d.body.style.overflow = "hidden";
    overlay.classList.add("active");
    overlay.scrollTop = 0;
    allStory[i].classList.add("active");
}

function closeStory(e, i) {
    d.body.style.overflow = "auto";
    overlay.classList.remove("active");
    allStory[i].classList.remove("active");
}

d.body.scrollTop = 0;
d.documentElement.scrollTop = 0;