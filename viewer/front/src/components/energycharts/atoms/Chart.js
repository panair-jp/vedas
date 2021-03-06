import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { isMobile } from "react-device-detect";

const Chart = (props) => {
  const dict = props.dict;
  const energyResoursesChecked = props.energyResoursesChecked;

  const aspect = isMobile ? (4.0 / 3.0) : (12.0 / 3.0);
  let list = []
  const unit_word = "MWh"

  if (energyResoursesChecked.demandChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.demand} key="demand" dataKey="demand" stroke="#9C6ADE" activeDot={{ r: 8 }} />);
  }
  if (energyResoursesChecked.nuclearChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.nuclear} key="nuclear" dataKey="nuclear" stroke="#330101" />);
  }
  if (energyResoursesChecked.thermalChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.thermal} key="thermal" dataKey="thermal" stroke="#BF0711" />);
  }
  if (energyResoursesChecked.hydroChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.hydro} key="hydro" dataKey="hydro" stroke="#006FBB" />);
  }
  if (energyResoursesChecked.geothermalChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.geothermal} key="geothermal" dataKey="geothermal" stroke="#EEC200" />);
  }
  if (energyResoursesChecked.biomassChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.biomass} key="biomass" dataKey="biomass" stroke="#50B83C" />);
  }
  if (energyResoursesChecked.solarChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.solar} key="solar" dataKey="solar" stroke="#F49342" />);
  }
  if (energyResoursesChecked.solarOutputControlChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.solar_output_control} key="solar_output_control" dataKey="solar_output_control" stroke="#C05717" />);
  }
  if (energyResoursesChecked.windChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.wind} key="wind" dataKey="wind" stroke="#47C1BF" />);
  }
  if (energyResoursesChecked.windOutputControlChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.wind_output_control} key="wind_output_control" dataKey="wind_output_control" stroke="#00848E" />);
  }
  if (energyResoursesChecked.pumpingChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.pumping} key="pumping" dataKey="pumping" stroke="#5C6AC4" />);
  }
  if (energyResoursesChecked.interconnectionChecked) {
    list.push(<Line unit={unit_word} type="monotone" name={dict.interconnection} key="interconnection" dataKey="interconnection" stroke="#B3BCF5" />);
  }

  return (
    <ResponsiveContainer width={isMobile ? '100%' : '95%'} aspect={aspect}>
      <LineChart data={props.energy_data}
        margin={{ top: 30, right: 30, left: 30, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {list}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart