/**
 *
 *
 * @class Templates
 */
class Parts {
    constructor(options) {
        this.options = options
    }

    Card = () => {
        return $("<div />", {
            class: "card"
        });
    }

    Section = () => {
        return $("<div />", {
            class: "container",
            id: null
        });
    };

    Base = () => {
        return $("<div />", {
            class: "card",
            click: function() {
                alert(`card was clicked`);
            }
        });
    };

    Header = () => {
        return $("<div />", {
            class: "headerH",
            text: null,
            click: function() {}
        });
    };

    Metric = () => {
        return $("<div />", {
            class: "metric",
            text: null
        });
    };

    Container = () => {
        return $("<div />", {
            class: "container"
        });
    };
    ContainerFluid = () => {
        return $("<div />", {
            class: "container-fluid"
        });
    };
    Row = () => {
        return $("<div />", {
            class: "row"
        });
    };

    GenerateCol = (colnum, amount) => {
        let temp = []
        for (let index = 0; index < amount; index++) {
            temp.push($("<div />", {
                class: `col-md-${colnum} collums-${index}`
            }))
        }
        return temp;

    };

    GenerateCard = (height, amount) => {
        let temp = []
        var a = `<div class="col-md-8 col-sm-6 col-xs-6">
                 <div class="header">
                    test
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6 seperate">
                <div class="metric">1</div>
                
              </div>`;
        var b = `<div class="clearfix"></div><div class="card-body"></div><div class="col-md-8 col-sm-6 col-xs-6">
                 <div class="small-header">
                    
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                <div class="small-metric"></div>
                
              </div></div>`

        for (let index = 0; index < amount; index++) {
            let card = $("<div />", {
                class: `card ${this.CardHeight(height)}`,
            });


            if (this.CardHeight(height) === 'three') {
                card.append(this.Row().append(a)).append(this.Row().append(b));
            }
            temp.push(card)
        }
        return temp;
    };

    CardHeight = (height) => {
        switch (height) {
            case 1:
                return 'standard'
            case 3:
                return 'three'
            case 6:
                return 'six'
            default:
                return `OptionType not found : ${optionsType}`
        }

    }

}