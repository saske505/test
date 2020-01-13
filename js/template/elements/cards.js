/**
 *
 *
 * @class Cards
 */
class Cards {
    constructor(id) {
        this.id = id;
        this.cards = [];
        this.cardsTemplates = [];
    }

    cardCount = () => { count = this.cards.length }
    init = () => new Cards()
}

Cards.prototype.add = function(options) {
    this.cards.push(new Card(options.sectionName, options.optionType));
}

Cards.prototype.remove = function(items, i) {
    items.slice(0, i - 1).concat(items.slice(i, items.length))
}

Cards.prototype.getAll = function() {
    this.cards.forEach((card) => console.log(card.id, card.sectionName, card.optionType));
};