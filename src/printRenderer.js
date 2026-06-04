/**
 * Coloring Studio (CS) | Rendering Engine (RC1)
 * Responsibility: Handle canvas rendering based on Ohuhu Master data.
 */

export function drawCombinedPlanPng(paletteData) {
    console.log("CS Engine: Initializing rendering sequence...");

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // A5 Dimensions
    canvas.width = 420; 
    canvas.height = 595;

    // Background
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header
    ctx.fillStyle = "#000000";
    ctx.font = "bold 16px Arial";
    ctx.fillText("CS Production - Verified Colors", 20, 30);
    ctx.font = "12px Arial";
    ctx.fillText(`Total Verified Colors: ${paletteData.length}`, 20, 50);

    // Rendering Loop with Fixed Alignment
    ctx.font = "10px monospace";
    let yPos = 80;
    
    paletteData.forEach((item, index) => {
        if (index >= 25) return; // Limit to prevent overlap
        
        // Use fixed x-coordinates to maintain perfect column alignment
        ctx.fillText(String(item.Code), 20, yPos);
        ctx.fillText(String(item.Name), 100, yPos);
        
        // Draw Hex swatch
        if (item.Hex) {
            ctx.fillStyle = item.Hex.startsWith('#') ? item.Hex : "#" + item.Hex;
            ctx.fillRect(300, yPos - 8, 20, 10);
            ctx.strokeRect(300, yPos - 8, 20, 10);
            ctx.fillStyle = "#000000";
        }
        
        yPos += 20;
    });

    console.log("CS Engine: Rendering complete.");
    return canvas;
}