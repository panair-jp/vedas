import React, { useState, useEffect, useCallback } from 'react'
import {AppProvider, Select, Checkbox} from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import JapanEnergyCharts from './components/JapanEnergyCharts'
import JapanEnergyCheckboxes from './components/JapanEnergyCheckboxes'
import noteService from './services/notes' 
import wordDictionaryService from './services/word_dictionary' 

//memo:cd ../supply-and-demand-viewer/viewer/front/ npm start
//https://polaris.shopify.com/components/
const App = () => {

  //Polaris area

  //select
  const [selected, setSelected] = useState('en');
  const handleSelectChange = useCallback((value) => setSelected(value), []);

  //checkbox
  const [hepcoChecked, setHepcoChecked] = useState(false);
  const handleHepcoChange = useCallback((newChecked) => setHepcoChecked(newChecked), []);
  const [tohokuepcoChecked, setTohokuepcoChecked] = useState(false);
  const handleTohokuepcoChange = useCallback((newChecked) => setTohokuepcoChecked(newChecked), []);
  const [rikudenChecked, setRikudenChecked] = useState(false);
  const handleRikudenChange = useCallback((newChecked) => setRikudenChecked(newChecked), []);
  const [tepcoChecked, setTepcoChecked] = useState(false);
  const handleTepcoChange = useCallback((newChecked) => setTepcoChecked(newChecked), []);
  const [chudenChecked, setChudenChecked] = useState(false);
  const handleChudenChange = useCallback((newChecked) => setChudenChecked(newChecked), []);
  const [kepcoChecked, setKepcoChecked] = useState(false);
  const handleKepcoChange = useCallback((newChecked) => setKepcoChecked(newChecked), []);
  const [energiaChecked, setEnergiaChecked] = useState(false);
  const handleEnergiaChange = useCallback((newChecked) => setEnergiaChecked(newChecked), []);
  const [yondenChecked, setYondenChecked] = useState(false);
  const handleYondenChange = useCallback((newChecked) => setYondenChecked(newChecked), []);
  const [kyudenChecked, setKyudenChecked] = useState(false);
  const handleKyudenChange = useCallback((newChecked) => setKyudenChecked(newChecked), []);
  const [okidenChecked, setOkidenChecked] = useState(false);
  const handleOkidenChange = useCallback((newChecked) => setOkidenChecked(newChecked), []);

  const options = [
    {label: '日本語', value: 'jp'},
    {label: 'English', value: 'en'},
    {label: 'China(Simplified)', value: 'ch'},
  ];

  let lang = selected;
  let dict = wordDictionaryService.get_word_dictionary(lang);

  const [data, setData] = useState([]) 

  //end
  useEffect(() => {
    noteService
      .getAll()
      .then(initialData => setData(initialData));
  }, [])
  
  return (
    <div>
      <AppProvider>
          <Select
            label="Language"
            options={options}
            onChange={handleSelectChange}
            value={selected}
          />
          <JapanEnergyCheckboxes
            dict={dict} 
            hepcoChecked={hepcoChecked}
            handleHepcoChange={handleHepcoChange}
            tohokuepcoChecked={tohokuepcoChecked}
            handleTohokuepcoChange={handleTohokuepcoChange}
            rikudenChecked={rikudenChecked}
            handleRikudenChange={handleRikudenChange}
            tepcoChecked={tepcoChecked}
            handleTepcoChange={handleTepcoChange}
            chudenChecked={chudenChecked}
            handleChudenChange={handleChudenChange}
            kepcoChecked={kepcoChecked}
            handleKepcoChange={handleKepcoChange}
            energiaChecked={energiaChecked}
            handleEnergiaChange={handleEnergiaChange}
            yondenChecked={yondenChecked}
            handleYondenChange={handleYondenChange}
            kyudenChecked={kyudenChecked}
            handleKyudenChange={handleKyudenChange}
            okidenChecked={okidenChecked}
            handleOkidenChange={handleOkidenChange}
          />
      </AppProvider>
      
      <h1>Energy Charts</h1>
      <ul>
        <JapanEnergyCharts 
          data={data}
          dict={dict}
          hepcoChecked={hepcoChecked} 
          tohokuepcoChecked={tohokuepcoChecked}
          rikudenChecked={rikudenChecked}
          tepcoChecked={tepcoChecked}
          chudenChecked={chudenChecked}
          kepcoChecked={kepcoChecked}
          energiaChecked={energiaChecked}
          yondenChecked={yondenChecked}
          kyudenChecked={kyudenChecked}
          okidenChecked={okidenChecked}
        />
      </ul>
    </div>
  )
}

export default App 
