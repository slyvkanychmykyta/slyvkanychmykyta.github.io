(function showOverlay () {
    var inputVariantA = document.querySelector('.variant-label-a') || undefined;
    var inputVariantB = document.querySelector('.variant-label-b') || undefined;
    var inputVariantC = document.querySelector('.variant-label-c') || undefined;
    var overlay = document.querySelector('.overlay');
    var continueButton = document.querySelector('.button-continue') || undefined;
    
    var PERCENT_A = '30%';
    var PERCENT_B = '34%';
    var PERCENT_C = '36%';

    var TEXT_A = 'А';
    var TEXT_B = 'Б';
    var TEXT_C = 'В';

    var showOverlay = function () {
        overlay.classList.remove('hidden');
    }

    var showButton = function () {
        continueButton.classList.remove('hidden');
    }
    var writeTextA= function () {
        overlay.innerHTML = '<p class="overlay-text"><span>'+ PERCENT_A +'</span> Людей обращают внимание на '+TEXT_A+'.</p>';
    }

    var writeTextB = function () {
        overlay.innerHTML = '<p class="overlay-text"><span>'+ PERCENT_B +'</span> Людей обращают внимание на '+ TEXT_B +'.</p>';
    }

    var writeTextC = function () {
        overlay.innerHTML = '<p class="overlay-text"><span>'+ PERCENT_C +'</span> Людей обращают внимание на '+ TEXT_C +'.</p>';
    }

    inputVariantA.addEventListener('click', function () {
        showOverlay();
        writeTextA();
        showButton();
    });

    inputVariantB.addEventListener('click', function () {
        showOverlay();
        writeTextB();
        showButton();
    });

    inputVariantC.addEventListener('click', function () {
        showOverlay();
        writeTextC();
        showButton();
    });
})();