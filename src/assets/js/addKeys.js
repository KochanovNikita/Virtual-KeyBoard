import "../sass/key.scss"

export const addKeys = (language, caseStyle, currentKeyLine) => {
    const array = []
    currentKeyLine.forEach(({ code, ruUpper, enUpper, ru, en }) => {
        let value
        if (caseStyle) {
            if (language) {
                value = ruUpper
            } else {
                value = enUpper
            }
        } else {
            if (language) {
                value = ru
            } else {
                value = en
            }
        }
        const KEY = `
        <button class="key" data-key="${code}">
            ${value}
        </button>
       `
        array.push(KEY)
    })
    return array.map(x => x).join("")
}
