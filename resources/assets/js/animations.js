window.sr = ScrollReveal({ reset: false });

if(document.body.clientWidth > 1024) {

    sr.reveal('.left', {duration: 1300, distance: '200px', origin: 'left', delay:300});

    sr.reveal('.right', {duration: 1300, distance: '200px', origin: 'right', delay:300});

    sr.reveal('.bottom', {duration: 800, distance: '100px', origin: 'bottom', delay:300});

} else {

    sr.reveal('.left', {duration: 800, distance: '50px', origin: 'left', delay:30});

    sr.reveal('.right', {duration: 800, distance: '50px', origin: 'right', delay:30});

    sr.reveal('.bottom', {duration: 800, distance: '10px', origin: 'bottom', delay:30});
}


