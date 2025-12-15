const helpstirWorkLogic = () => {
    const listItems = document.querySelectorAll('.helpstirwork_section .card-container li');

    const handleMouseEnter = (event) => {
        listItems.forEach(i => {
            i.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    };

    const handleMouseLeave = () => {
        listItems.forEach(i => {
            i.classList.remove('active');
        });
        document.querySelector('.step-1').classList.add('active');
    };

    listItems.forEach(item => {
        item.addEventListener('mouseenter', handleMouseEnter);
    });

    const cardContainer = document.querySelector('.helpstirwork_section .card-container');
    if (cardContainer) {
        cardContainer.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
        listItems.forEach(item => {
            item.removeEventListener('mouseenter', handleMouseEnter);
        });
        if (cardContainer) {
            cardContainer.removeEventListener('mouseleave', handleMouseLeave);
        }
    };
};

export default helpstirWorkLogic;