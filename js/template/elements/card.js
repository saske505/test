/**
 *
 *
 * @class Card
 */
class Card {
    constructor(sectionName, optionType) {

        this.id = (typeof(c) === 'undefined') ? count : count++;
        this.sectionName = sectionName;
        this.optionType = optionType;
        this.options = this.cardOptions('options', this.optionType);
        this.template = this.cardOptions('template', this.optionType);
    }

    cardOptions(key, optionsType) {

        let response = { message: `${optionsType}`, data: {} };
        switch (optionsType) {
            case 'GetStratusMatchMetrics':
                return Types.GetStratusMatchMetrics[key]
            case 'GetRefereeMatchMetrics':
                return Types.GetRefereeMatchMetrics[key]
            case 'GetStratusMatchMetricsForTeam':
                return Types.GetStratusMatchMetricsForTeam[key]
            case 'GetAssessmentMatchHeader':
                return Types.GetAssessmentMatchHeader[key]
            case 'GetAssessmentItem':
                return Types.GetAssessmentItem[key]
            default:
                return `OptionType not found : ${optionsType}`
        }
    }

    templateType(optionsType) {
        return new Promise((resolve, reject) => {})
    }
}

const CardInstance = new Card();
Object.freeze(CardInstance);