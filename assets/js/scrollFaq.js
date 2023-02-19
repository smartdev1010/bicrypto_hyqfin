if(document.body.clientWidth > 1224) {
    document.querySelector('.faq').onclick = () =>{
        window.scrollTo(0,5800);
    }
}else if (document.body.clientWidth > 1024 && document.body.clientWidth < 1224) {
    document.querySelector('.faq').onclick = () => {
        window.scrollTo(0,6450);
}
} else if (document.body.clientWidth > 700 && document.body.clientWidth < 1024) {
    document.querySelector('.faq').onclick = () => {
        window.scrollTo(0,7520);
}
}else if (document.body.clientWidth < 480) {
    document.querySelector('.faq').onclick = () => {
        window.scrollTo(0,9700);
}
}
