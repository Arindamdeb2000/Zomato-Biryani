let RecruiterEmail = function(recipient, sender) {

    let currentPitch = 0;

    let elements = {
        salutation: document.getElementById('salutation'),
        pitch: document.getElementById('pitch'),
        affirmativeResponse: document.getElementById('affirmative-response'),
        negativeResponse: document.getElementById('negative-response'),
        sender: document.getElementById('sender')
    };

    recipient = recipient || 'Person Who Showed Up In a LinkedIn Search';

    if (sender && typeof(sender) !== 'object') {
        console.log('sender argument must be an object');
        return false;
    }

    sender = sender || {
        firstName: 'Gary',
        lastLname: 'McRecuiterpants',
        phone: '1-800-555-1234',
        email: 'recruiterpants@aol.com'
    };

    let pitches = [
        'Delicious,where a kid or a grandpa, all age groups gorge on you wholeheartedly.',
        'robust and flavorful using varities of cosmetics like cinnamon,cloves,ginger, garlic,cloves and green and black cardamom?.',
        'Stunning ! where pople would fall in love with you, because of the way you can be cooked in dum!',
        'Staying away from that meaning less Spicy mirch ka Salan🌶'
    ];

    let affirmativeResponses = [
        `Yes ${sender.firstName}, contact me because I desire this.`,
        'Right on!',
        'You had me at "hello".',
        `Now you're just playing with me ${sender.firstName}!`
    ];


    let negativeResponse = `No ${sender.firstName}, I want none of these things and want to be stagnant with my same old job and to be phased out of new opportunities.`;

    let valueProposition = 'Staying on top of your industry is necessary. Partner with Basmati,Mutton or Chicken to understand more about the role. You never know,this might be the job you are looking at.';

    function init() {
        elements.salutation.innerHTML = `${recipient},`;
        elements.pitch.innerHTML = pitches[currentPitch];
        elements.affirmativeResponse.innerHTML = affirmativeResponses[0];
        elements.negativeResponse.innerHTML = negativeResponse;

        let senderEmailLink = `<a href="mailto:${sender.email}">${sender.email}</a>`;
        elements.sender.innerHTML = `${sender.firstName} ${sender.lastName}<br>${senderEmailLink}<br>${sender.phone}`;

    }

    init();

    this.nextPitch = function() {
        currentPitch++;
        if (currentPitch > pitches.length - 1) {
            document.location.assign(`mailto:${sender.email}?subject=Hey! I Biryani, I wanted to speak to you about the Craving Executive Officer role in your tummy 🍛!`);
        } else {
            elements.pitch.innerHTML = pitches[currentPitch];
            elements.affirmativeResponse.innerHTML = affirmativeResponses[currentPitch];
        }
    };

    this.noThanks = function() {
        alert(valueProposition);
    };
};
