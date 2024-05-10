import CardType from './CardType.js';
const cardType = new CardType();

export default class ValidatorsWidget {
    constructor(parentEl) {
        this.parentEl = parentEl;

        if (parentEl) {
            this.onSubmit = this.onSubmit.bind(this);
            this.parentEl.addEventListener('submit', this.onSubmit);
            this.input = this.parentEl.querySelector('.form-input');
            this.result = document.querySelector('.result');
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const value = this.input.value;
        const cardTypeItem = cardType.getBrand(parseInt(value));
        this.markCard(cardTypeItem);
        const result = this.isValid(value);
        if (result) {
            this.result.innerText = 'Действующий';
            this.result.classList.add('correct');
            this.result.classList.remove('incorrect');
        } else {
            this.result.innerText = 'Не действующий';
            this.result.classList.remove('correct');
            this.result.classList.add('incorrect');
        };
    }

    isValid(cardNum) {
        let sum = 0;
        for (let i = 2; i <= 11; i++) {
            if (i % 2 === 0) {
                let sumStep0 = (parseInt(cardNum[cardNum.length - i]) * 2);
                if (sumStep0 > 9) {
                    sumStep0 -= 9;
                }
                sum = sum + sumStep0;
            } else {

                sum = sum + parseInt(cardNum[cardNum.length - i]);
            }
        }
        sum = sum + parseInt(cardNum[cardNum.length - 1]);
        return sum % 10 === 0;
    }

    markCard(cardTypeItem) {
        const elements = document.querySelectorAll('.card');
        for (let elItem of elements) {
            elItem.classList.remove('markCard');
        }
   
        if (cardTypeItem.alias != '') {
            let elCard = document.querySelector('.' + cardTypeItem.alias);
            elCard.classList.add('markCard');   
        }
        
    }

}

