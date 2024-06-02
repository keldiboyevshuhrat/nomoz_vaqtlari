const $ = function (selectorName) {

    return document.querySelector(selectorName)

}

function $all(selectorName) {
    return document.querySelectorAll(selectorName)
}

const cretElement = function (tagname, className, value, content) {
    const newElement = document.createElement(tagname);
    if (className) {
        newElement.setAttribute('class', className)
    }

    if (content) {
        newElement.innerHTML = `${content}`
    }

    if (value) {
        newElement.value = value
    }

    return newElement
}