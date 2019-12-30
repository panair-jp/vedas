import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { AppProvider, Spinner } from '@shopify/polaris';
import styled from 'styled-components';
import FooterLogo from '../../../components/ver2/EnergyCharts/FooterLogo'
import Condition from '../../../components/ver2/EnergyCharts/Condition'
import RangeSelect from '../../../components/ver2/EnergyCharts/RangeSelect'
import DateSelect from '../../../components/ver2/EnergyCharts/DateSelect'
import CompanyEnergyCharts from '../../../components/ver2/EnergyCharts/CompanyEnergyCharts'
import wordDictionaryService from '../../../services/word_dictionary'
import queryParamPerserService from '../../../services/query_param_perser'
import electoricPowerResourseHook from '../../../custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from '../../../custom_hooks/electoric_power_company'
import dateSelectHook from '../../../custom_hooks/date_select'
import rangeSliderHook from '../../../custom_hooks/electoric_power_data'

const EnergyCharts = (props) => {

  const lang = props.lang;

  useEffect(() => {
    const pathname = '/' + lang + '/home';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  //クエリパラメータ
  const qs = queryParamPerserService.execute(props.qs, lang);
  const language_initialize = qs.lang;
  const electoric_power_data_initialize_params = qs.electoric_power_data_initialize_params;
  const energy_power_company_initialize_params = qs.energy_power_company_initialize_params;
  const electoric_power_resourse_initialize_params = qs.electoric_power_resourse_initialize_params;

  //電力データをCallするためのパラメータや処理
  const electoric_power_data_hook = rangeSliderHook.useElectoricPowerData(electoric_power_data_initialize_params)
  // const is_loading = electoric_power_data_hook.is_loading;
  // const year_and_month = electoric_power_data_hook.year_and_month;
  // const data = electoric_power_data_hook.data;
  // const unit = electoric_power_data_hook.unit;
  // const handleTermChange = electoric_power_data_hook.handleTermChange;
  // const range_slider = electoric_power_data_hook.range_slider;
  // const is_range_slider_open = electoric_power_data_hook.is_range_slider_open;
  // const setData = electoric_power_data_hook.setData;
  // const setIsLoading = electoric_power_data_hook.setIsLoading;

  //言語選択
  let dict = wordDictionaryService.getV2(language_initialize);

  //30分値指定の期間
  const date_select = dateSelectHook.useDateSelect(
    electoric_power_data_initialize_params, 
    electoric_power_data_hook.setData, 
    electoric_power_data_hook.setIsLoading
  );

  //電力会社の選択
  const electoric_power_company = electoricPowerCompanyHook.useElectoricPowerCompany(energy_power_company_initialize_params);
  // const allChecked = electoric_power_company.allChecked;
  // const handleAllChange = electoric_power_company.handleAllChange;
  // const electricPowersChecked = electoric_power_company.Checked;
  // const handleElectricPowersChange = electoric_power_company.handleValueChange;

  //エネルギーリソースの選択
  const electoric_power_resource = electoricPowerResourseHook.useElectoricPowerResourse(electoric_power_resourse_initialize_params);
  // const energyResoursesChecked = electoric_power_resource.Checked;
  // const handleEnergyResoursesChange = electoric_power_resource.handleValueChange;

  const AnalyzeArea = styled.div`
    height: 2000%;
    width: 91%;
    position: absolute;
    left: 4.1%;
    right: 4.1%;
    top: 140%;
    bottom: 10.65%;
    background: #EFEFEF;
    border-radius: 54px;
` ;

  const Content = styled.div`
    position: absolute;
    width: 90%;
    height: 50%;
    left: 5%;

    background: #fff;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 16px;
  `;

  const ConditionDetailTitle = styled.div`
    height: 0%;
    margin-top: 3%;
    padding-bottom: 3%;
    margin-left: 4%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;

    color: #000;
  ` ;

  let RangeSelectArea = styled.div`
    height: 2%;
    width: 94%;
    margin-top: 0%;
    margin-left: 2%;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    background: #F0F0F0;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 12px;
  `;

  let DateSelectArea = styled.div`
    height: 2%;
    width: 94%;
    margin-top: 0%;
    margin-left: 2%;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
    background: #F0F0F0;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 12px;
  `;

  return (
    <AnalyzeArea>
      <Condition dict={dict}/>
      <Content>
        <ConditionDetailTitle><p>{dict.analyze_condtion_text4}</p></ConditionDetailTitle>
        <RangeSelectArea>
          <AppProvider>
            <RangeSelect
              range_slider={electoric_power_data_hook.range_slider}
              unit={electoric_power_data_hook.unit}
              year_and_month={electoric_power_data_hook.year_and_month}
            />
          </AppProvider>
        </RangeSelectArea>
        <DateSelectArea>
          <AppProvider>
            <DateSelect
              dict={dict}
              unit={electoric_power_data_hook.unit}
              date_select={date_select}
            />
          </AppProvider>
        </DateSelectArea>
        <AppProvider>
        {
          electoric_power_data_hook.is_loading ?
            (
              <ul>
                <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />
              </ul>
            )
            :
            (<ul>
              <CompanyEnergyCharts
                data={electoric_power_data_hook.data}
                dict={dict}
                electricPowersChecked={electoric_power_company.Checked}
                energyResoursesChecked={electoric_power_resource.Checked}
              />
            </ul>
            )
        }
        </AppProvider>
      </Content>
      <FooterLogo handleMenuChange={props.handleMenuChange}/>
    </AnalyzeArea>
  )
}

export default EnergyCharts