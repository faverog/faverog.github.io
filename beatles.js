function hand()
{
    let x = document.querySelector('#hand');
    var audio = document.querySelector('#Shand');
    document.querySelector('#Sloving').pause();
    document.querySelector('#Sface').pause();
    document.querySelector('#face').innerHTML = 'Play';
    document.querySelector('#loving').innerHTML = 'Play';

    if (x.innerHTML == 'Pause')
    {
        x.innerHTML = 'Play';
        audio.pause();
    }
    else if (x.innerHTML == 'Play')
    {
        x.innerHTML = 'Pause';
        audio.play();
    }
}

function loving()
{
    let x = document.querySelector('#loving');
    var audio = document.querySelector('#Sloving');
    document.querySelector('#Shand').pause();
    document.querySelector('#Sface').pause();
    document.querySelector('#hand').innerHTML = 'Play';
    document.querySelector('#face').innerHTML = 'Play';

    if (x.innerHTML == 'Pause')
    {
        x.innerHTML = 'Play';
        audio.pause();
    }
    else if (x.innerHTML == 'Play')
    {
        x.innerHTML = 'Pause';
        audio.play();
    }
}

function face()
{
    let x = document.querySelector('#face');
    var audio = document.querySelector('#Sface');
    document.querySelector('#Shand').pause();
    document.querySelector('#Sloving').pause();
    document.querySelector('#hand').innerHTML = 'Play';
    document.querySelector('#loving').innerHTML = 'Play';

    if (x.innerHTML == 'Pause')
    {
        x.innerHTML = 'Play';
        audio.pause();
    }
    else if (x.innerHTML == 'Play')
    {
        x.innerHTML = 'Pause';
        audio.play();
    }
}