let c, errorLog, count;
c = {},
    errorLog = [],
    count = 0;
let template = new Parts();

let parts = (function() {
    return {
        section: template.Section,
        row: template.Row,
        cols: template.GenerateCol,
        card: template.GenerateCard,
        header: template.Header,
        metric: template.Metric,
        container: template.Container,
        containerFluid: template.ContainerFluid
    }
})();

let sectionConfig = [{

    name: "Points scored",
    id: String.prototype.toCamelCase("Points scored"),
    col: 4,
    height: 1,
    cards: 4,
    temp: [parts.section(), parts.row(), parts.cols(3, 4), parts.card(1, 4), parts.header()]
}, {
    name: "Lineouts",
    id: String.prototype.toCamelCase("Lineouts"),
    col: 4,
    height: 3,
    cards: 2,
    temp: [parts.section(), parts.row(), parts.cols(3, 4), parts.card(3, 2), parts.header()]
}, {
    name: "Scrums",
    id: String.prototype.toCamelCase("Scrums"),
    col: 4,
    height: 1,
    cards: 4,
    temp: [parts.section(), parts.row(), parts.cols(3, 4), parts.card(1, 4), parts.header()]
}, {
    name: "Breakdowns",
    id: String.prototype.toCamelCase("Breakdowns"),
    col: 4,
    height: 3,
    cards: 2,
    temp: [parts.section(), parts.row(), parts.cols(3, 4), parts.card(3, 2), parts.header()]
}, {
    name: "Discipline",
    id: String.prototype.toCamelCase("Discipline"),
    col: 4,
    height: 3,
    cards: 4,
    temp: [parts.section(), parts.row(), parts.cols(3, 4), parts.card(3, 4), parts.header()]
}, {
    name: "Referee",
    id: String.prototype.toCamelCase("Referee"),
    col: 2,
    height: 3,
    height: 6,
    cards: 2,
    temp: [parts.section(), parts.row(), parts.cols(6, 4), parts.card(6, 2), parts.header()]
}, {
    name: "Reviewer",
    id: String.prototype.toCamelCase("Reviewer"),
    col: 2,
    height: 6,
    cards: 2,
    temp: [parts.section(), parts.row(), parts.cols(6, 4), parts.card(6, 2), parts.header()]
}, {
    name: "Coach",
    id: String.prototype.toCamelCase("Coach"),
    col: 2,
    height: 6,
    cards: 2,
    temp: [parts.section(), parts.row(), parts.cols(6, 4), parts.card(6, 2), parts.header()]
}]

function setIndex() {
    return sectionConfig.map(x => x['weight'] = sectionConfig.indexOf(x));
}
setIndex();

let templateBuilder = (function() {

    let arr = [];
    let curId = null;
    let lastId = null;
    createSections = () => {
        sectionConfig.forEach((e, i, a) => {
            let same = a.find(q => q.id === e.id);
            var b = {
                id: same.id,
                template: [],
                weight: same.weight,
                name: same.name
            }
            b.template = e.temp;
            arr.push(b)
        })
    }

    renderSections = () => {
        let content = $('.content');
        let count = 0;
        let idVal = 0;
        for (let index = 0; index < arr.length; index++) {
            arr[index].template.forEach((e, i, a) => {
                switch (count) {
                    case 0:
                        content.append(parts.containerFluid().attr('id', arr[index].id));
                        content.find(`#${arr[index].id}`).append($(e))
                        count++;
                        break;
                    case 1:
                        content.find(`#${arr[index].id} .container`).append($(e))
                        count++;
                        break;
                    case 2:
                        e.forEach((col, ii) => {
                            content.find(`#${arr[index].id} .container .row`).append($(col))
                        })
                        count++;
                        break;
                    case 3:
                        e.forEach((card, ind) => {
                            content.find(`#${arr[index].id} .container .row .collums-${ind}`).append($(card))
                        })
                        count++;
                        break;
                    case 4:
                        content.find(`#${arr[index].id} .container .row`).first().before(`<div class="col-md-12"><h4 class="titleH">${arr[index].name}</h4></div><div class="clearfix"></div>`);
                        count = 0;
                        idVal++;
                        break;
                }

            })
        }
    }
    return {
        createSections: createSections,
        renderSections: renderSections,
        arr: arr
    }

})(document);

let CardsManager = (function() {

    init = () => {
        try {
            initCards().then((value) => {
                return c.Cards = value;
            }).then((value) => {
                return c.cardsTemplates = Types
            }).catch(e => console.error(`${e}`));

        } catch (e) {
            console.error(`${e}`);
        }
    }

    initCards = () => {
        return new Promise((resolve, reject) => {
            if (isEmpty(c))
                resolve(new Cards("CardsContainer"))
            else
                reject(`CardsContainer already exists : ${c}`)
        })
    }

    hydrate = (cards) => {
        var k = Object.keys(cards);
        for (var i = 0, len = k.length; i < len; i++) {
            this[k[i]] = cards[k[i]];
        }
    }

    return {
        init: init
    }

})(document);