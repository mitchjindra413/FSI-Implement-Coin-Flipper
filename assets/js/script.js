// TODO: Declare any global variables we need
let headsRolls = 0
let tailsRolls = 0

// Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code
document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

   // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', () => {
        let flippedHeads = Math.random() < 0.5

        // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM
        if (flippedHeads) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'

            headsRolls += 1
        }
        else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'

            tailsRolls += 1
        }

        // Update the scoreboard

        // TODO: Calculate the total number of rolls/flips
        let total = headsRolls + tailsRolls

        // Make variables to track the percentages of heads and tails
        let percentHeads = 0
        let percentTails = 0

        // TODO: Use the calculated total to calculate the percentages
        if (total > 0) {
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

        // TODO: Update the display of each table cell
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    // Clear Button Click Handler
    document.getElementById('clear').addEventListener('click', function () {
        // TODO: Reset global variables to 0
        headsRolls = 0
        tailsRolls = 0

        document.getElementById('message').textContent = 'Let\'s Get Rolling!'

        // TODO: Update the scoreboard (same logic as in flip button click handler)
        
        let total = headsRolls + tailsRolls

        let percentHeads = 0
        let percentTails = 0

        if (total > 0) {
            percentHeads = Math.round((headsRolls / total) * 100)
            percentTails = Math.round((tailsRolls / total) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})