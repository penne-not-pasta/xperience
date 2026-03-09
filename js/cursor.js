function openProgram(programName) {
    // 1. Change cursor to hourglass
    document.body.classList.add('xp-wait');

    // 2. Simulate a loading delay
    setTimeout(() => {
        console.log(`Opening ${programName}...`);
        
        // 3. Revert back to normal
        document.body.classList.remove('xp-wait');
    }, 1500); 
}