interface cardListProps {
    electron: RegExp,
    maestro: RegExp,
    dankort: RegExp,
    interpayment: RegExp,
    unionpay: RegExp,
    visa: RegExp,
    mastercard: RegExp,
    amex: RegExp,
    diners: RegExp,
    discover: RegExp,
    jcb: RegExp
}

export const cardList:cardListProps = {
    electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
    maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
    dankort: /^(5019)\d+$/,
    interpayment: /^(636)\d+$/,
    unionpay: /^(62|88)\d+$/,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/
}

// While Entering the card number in the Add New Card form 
// we are detecting the card type to show the card icon in 
// the input field, this function combined with the object 
// above helps us in detecting the card type
export function detectCardType(number: string) {
    for(const key in cardList) {
        if(cardList[key as keyof cardListProps].test(number)) {
            return key
        }
    }
}