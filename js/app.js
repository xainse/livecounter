
/**
 * 
 * @param {int persent} batarryPersent 
 */
function saveBatarryPersentToLocalStoreageInJSONHistory(batarryPersent) {
    let jsonHistory = getBatarryPersentFromLocalStoreageInJSONHistory();
    
    jsonHistory[new Date()] = batarryPersent;

    localStorage.setItem("jsonHistory", JSON.stringify(jsonHistory));
}

function getBatarryPersentFromLocalStoreageInJSONHistory() {
    let jsonHistory = localStorage.getItem("BatteryPersentHistory");
    if (jsonHistory == null) {
        jsonHistory = {};
    } else {
        jsonHistory = JSON.parse(jsonHistory);
    }
    return jsonHistory;
}


navigator.getBattery().then(battery => {
  function updateAllBatteryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', () => {
    updateChargeInfo();
  });
  function updateChargeInfo() {
    console.log("Battery charging? "
      + (battery.charging ? "Yes" : "No"));
  }

  battery.addEventListener('levelchange', () => {
    updateLevelInfo();
  });
  function updateLevelInfo() {
    console.log("Battery level: "
      + battery.level * 100 + "%");
  }

  battery.addEventListener('chargingtimechange', () => {
    updateChargingInfo();
  });
  function updateChargingInfo() {
    console.log("Battery charging time: "
      + battery.chargingTime + " seconds");
  }

  battery.addEventListener('dischargingtimechange', () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo() {
    console.log("Battery discharging time: "
      + battery.dischargingTime + " seconds");
  }

});
