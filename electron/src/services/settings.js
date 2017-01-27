export default class Settings {
  static getFeatureStates(section){
    if (section == "career"){
      return [0,0,0,0,0];
    } else if (section == "finance"){
      return [0,0,0,0,0,0,0,0,0];
    } else if (section == "health"){
      return [0,0,0,0,0,0,0,0];
    } else if (section == "medical"){
      return [0,0,0,0,0,0];
    } else if (section == "school"){
      return [0,0,0,0,0];
    }
  }
}
