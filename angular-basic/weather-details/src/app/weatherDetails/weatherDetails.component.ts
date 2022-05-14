import { Component, Input } from "@angular/core";

@Component({
  selector: "weather-details",
  templateUrl: "./weatherDetails.component.html",
  styleUrls: ["./weatherDetails.component.scss"],
})
export class WeatherDetails {
  @Input() weatherData: data[];

  searchTerm = "";
  searchedData?: data = undefined;

  onChange(value: string | null) {
    this.searchedData = this.weatherData.find(
      ({ name }) => name.toLowerCase() === value.toLowerCase()
    );
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
