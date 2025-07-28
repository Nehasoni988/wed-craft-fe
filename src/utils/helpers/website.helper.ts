import { weddingConfig } from "../../config/wedding.config";

export const headerImage = weddingConfig.website.header.image

export const fallingFlowerImage = weddingConfig.website.general.fallingFlowerImage

export const createAndstartFallingFlowersAnimation = () => {
    const flowerAnimationContainer = document.getElementById('flower-animation')
    if (!flowerAnimationContainer) return;

    // Check if the number of flowers exceeds a limit (e.g., 10 flowers at a time)
    const currentFlowers = flowerAnimationContainer?.getElementsByClassName('flower')
    if (currentFlowers && currentFlowers.length > 10) {
        // Remove the oldest flower if there are too many flowers
        currentFlowers[0].remove()
    }

    // Generate 1 flower every time the function runs
    const flower = document.createElement('div')
    flower.classList.add('flower')
    flower.style.setProperty('background-image', `url(${fallingFlowerImage})`)

    // Randomize position, animation duration, and delay
    flower.style.left = Math.random() * 100 + 'vw' // Random horizontal position
    flower.style.animationDuration = Math.random() * 5 + 5 + 's' // Between 5s and 10s for smooth animation
    flower.style.animationDelay = '0s' // Remove any delay for immediate falling
    flower.style.transform = `rotate(${Math.random() * 360}deg)` // Random initial rotation

    flowerAnimationContainer.appendChild(flower)

    // Remove flower after animation ends
    flower.addEventListener('animationend', () => {
        flower.remove()
    })
}