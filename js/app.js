const colorsContainers = document.querySelector('.colors-container')
const spawnButton = document.querySelector('#spawn-button')

let colorBlocks = ['', '', '', '']

// to get a random number for the color generation
function getRandomNumber()
{
    return Math.floor(Math.random() * 255)
}

// to generate the colors
function spawn()
{
    // to clear the previous colors
    colorsContainers.innerHTML = ''

    const commonColor = getRandomNumber()

    colorBlocks.forEach((_colorBlock, index) => {
        // to display the colors text
        colorBlocks[index] =
            'rgb('
        + commonColor +
        ',' +
        getRandomNumber() +
        ',' +
        getRandomNumber() +
        ')'
    })

    // to display the colors
    colorBlocks.forEach(colorBlock =>
    {
        const divElement = document.createElement('div')
        divElement.style.backgroundColor = colorBlock
        divElement.textContent = colorBlock
        colorsContainers.append(divElement)
    })

}

spawn()
spawnButton.addEventListener('click', spawn)
document.addEventListener('keydown', spawn)

// to copy to clipboard

function copyToClipboard()
{
    var copyText = document.getElementById('background-color')
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value)
    alert('Copied the text: ' + copyText.value)
}

copyToClipboard()
document.addEventListener('click', copyToClipboard)

