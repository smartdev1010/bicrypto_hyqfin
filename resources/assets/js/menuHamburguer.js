let buttonMenu = document.querySelector('.menu_hamburguer');

buttonMenu.onclick = () => {
    if(document.querySelector('.section_menu').classList.contains('menu_anim')) {

        document.querySelector('.r1').classList.remove('line1Anim');
        document.querySelector('.r2').classList.remove('line2Anim');
        document.querySelector('.r3').classList.remove('line3Anim');
        document.querySelector('.r1').classList.add('line1AnimReverse');
        document.querySelector('.r2').classList.add('line2AnimReverse');
        document.querySelector('.r3').classList.add('line3AnimReverse');
        
        document.querySelector('.menu_suspenso').classList.remove('menu_suspenso_anim');
        document.querySelector('.menu_suspenso').classList.add('menu_suspenso_anim_reverse');

        document.querySelector('.section_menu').classList.remove('menu_anim');
        document.querySelector('.section_menu').classList.add('menu_animReverse');

    } else {
        document.querySelector('.r1').classList.remove('line1AnimReverse');
        document.querySelector('.r2').classList.remove('line2AnimReverse');
        document.querySelector('.r3').classList.remove('line3AnimReverse');
        document.querySelector('.r1').classList.add('line1Anim');
        document.querySelector('.r2').classList.add('line2Anim');
        document.querySelector('.r3').classList.add('line3Anim');

        document.querySelector('.menu_suspenso').classList.remove('menu_suspenso_anim_reverse');
        document.querySelector('.menu_suspenso').classList.add('menu_suspenso_anim');

        document.querySelector('.section_menu').classList.remove('menu_animReverse');
        document.querySelector('.section_menu').classList.add('menu_anim');
    }
    
}