function colorSwitch(color) {
    const lowercaseColor = color.toLowerCase();
  
    switch (lowercaseColor) {
      case "black":
        console.log("Black color is selected.");
        break;
    
      case "violet":
        console.log("Violet color is selected.");
        break;
    
      case "pink":
        console.log("Pink color is selected.");
        break;
    
      default:
        console.log("Invalid color.");
        break;
    }
  }
  
  colorSwitch("black"); // Black color is selected.
  colorSwitch("VIOLET"); // Violet color is selected.
  colorSwitch("piNk"); // Pink color is selected.
  colorSwitch("Blue"); // Invalid color.