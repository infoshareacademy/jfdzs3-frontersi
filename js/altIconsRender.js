
const featureIcon = document.querySelectorAll('.feature_icon');

featureIcon.forEach((element, index) => {
    return element.addEventListener("click", function () {
            const ico = element.nextSibling.nextSibling;
            let altClass='';
            if (index === 0) {
                altClass = 'first_icon_show';
            } else if (index === 1) {
                altClass = 'second_icon_show';
            } else if (index === 2) {
                altClass = 'third_icon_show';
            } else{
                altClass = 'fourth_icon_show';
            }
    
         AltIconRender(ico, altClass);
    });

});

function AltIconRender(altContainer, altIconClass) {

    if (altContainer.classList.contains('hidden')) {

            altContainer.classList.remove('hidden');
            altContainer.classList.add(altIconClass);
 
    } else {
        altContainer.classList.add('hidden');

    }

}
