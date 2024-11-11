// counter.ts
var animateCounter = function (id: string, start: number, end: number, duration: number): void {
    var element = document.getElementById(id) as HTMLElement;
    var startTime: number | null = null;
    
    // Dynamic scaling of duration based on target value (end)
    const scaleDuration = (target: number): number => {
        // Slow down for smaller numbers, speed up for larger numbers
        const baseDuration = 3000; // Base duration (3 seconds)
        const factor = target < 20000000 ? 1.5 : target < 50000000 ? 1.2 : 1; // Adjust these values as needed
        return baseDuration * factor;
    };

    // Adjust the duration based on the end target value (e.g., slow for 20m, fast for 120m)
    const adjustedDuration = scaleDuration(end);

    var step = function (timestamp: number) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var current = Math.min(start + (end - start) * (progress / adjustedDuration), end);
        element.textContent = formatNumber(current);
        if (progress < adjustedDuration) {
            requestAnimationFrame(step);
        } else {
            element.textContent = formatNumber(end); // Ensure it ends exactly at the target number
        }
    };
    requestAnimationFrame(step);
};

// Helper function to format numbers (e.g., with commas for thousands)
var formatNumber = function (num: number): string {
    return num.toLocaleString();
};

// Function to start all animations when the document is ready
var startAnimations = function () {
    animateCounter("number1", 0, 12, 6000); // Animate 120m over 2 seconds
    animateCounter("number2", 0, 20, 6000); // Animate 20m with slower speed
    animateCounter("number3", 0, 24, 6000); // Animate 240 over 2 seconds
};

// Start animations when the page is loaded
document.addEventListener("DOMContentLoaded", startAnimations);
