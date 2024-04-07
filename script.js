// Simulated data for demonstration purposes
const batteryPercentage = Math.floor(Math.random() * 101);
const supercapacitorPercentage = Math.floor(Math.random() * 101);
const isCharging = Math.random() < 0.5; // Simulate charging status

// Update the UI with simulated data
document.getElementById("batteryPercentage").textContent = `Battery Percentage: ${batteryPercentage}%`;
document.getElementById("supercapacitorPercentage").textContent = `Supercapacitor Percentage: ${supercapacitorPercentage}%`;
document.getElementById("chargingStatus").textContent = `Charging/Discharging Status: ${isCharging ? "Charging" : "Discharging"}`;

// Notify if battery percentage is low
if (batteryPercentage <= 10) {
  document.getElementById("notification").textContent = "Battery percentage is low! Switch to supercapacitor.";
}
