'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('surfBreaks', [
        {
        name: 'Goats',
        country: 'United States of America',
        state: 'HI',
        city: 'Laie',
        privatebreak: false,
        latitude: 21.660501869735103, 
        longitude: -157.92715057469772,
        zipcode: '96762',
        waveType: 'Reef Break'
      },
        {
        name: 'Lava Fingers',
        country: 'United States of America',
        state: 'HI',
        city: 'Kahuku',
        privatebreak: false,
        latitude: 21.67528919389237,
        longitude: -157.93509673942145,
        zipcode: '96731',
        waveType: 'Reef Break'
      },
        {
        name: 'Discos',
        country: 'United States of America',
        state: 'HI',
        city: 'Kahuku',
        privatebreak: false,
        latitude: 21.705474357580595, 
        longitude: -157.997173022564,
        zipcode: '96731',
        waveType: 'Reef Break'
      },
        {
        name: 'Turtle Bay',
        country: 'United States of America',
        state: 'HI',
        city: 'Kahuku',
        privatebreak: false,
        latitude: 21.70519539782012, 
        longitude: -157.99978191025087,
        zipcode: '96731',
        waveType: 'Reef Break'
      },
        {
        name: 'Velzyland',
        country: 'United States of America',
        state: 'HI',
        city: 'Haleiwa',
        privatebreak: false,
        latitude: 21.68458023994207, 
        longitude: -158.0313443182409,
        zipcode: '96712',
        waveType: 'Reef Break'
      },
        {
        name: 'Freddysland',
        country: 'United States of America',
        state: 'HI',
        city: 'Haleiwa',
        privatebreak: false,
        latitude: 21.681679686969275,  
        longitude: -158.03335703731528,
        zipcode: '96712',
        waveType: 'Reef Break'
      },
        {
        name: 'Backyards',
        country: 'United States of America',
        state: 'HI',
        city: 'Haleiwa',
        privatebreak: false,
        latitude: 21.67993384684555,  
        longitude: -158.0384824108848,
        zipcode: '96712',
        waveType: 'Reef Break'
      },
        {
        name: 'Sunset',
        country: 'United States of America',
        state: 'HI',
        city: 'Haleiwa',
        privatebreak: false,
        latitude: 21.67639196841471,   
        longitude: -158.0393571696984,
        zipcode: '96712',
        waveType: 'Reef Break'
      },
        {
        name: 'Kammies',
        country: 'United States of America',
        state: 'HI',
        city: 'Haleiwa',
        privatebreak: false,
        latitude: 21.672648845490503,    
        longitude: -158.0430892963768,
        zipcode: '96712',
        waveType: 'Reef Break'
      },
        {
        name: 'Rocky Point',
        country: 'United States of America',
        state: 'HI',
        city: 'Haleiwa',
        privatebreak: false,
        latitude: 21.670250493522214,     
        longitude: -158.0468509469511,
        zipcode: '96712',
        waveType: 'Reef Break'
      },
        {
        name: 'Gas Chambers',
        country: 'United States of America',
        state: 'HI',
        city: 'Haleiwa',
        privatebreak: false,
        latitude: 21.667486844171805,     
        longitude: -158.0489843236481, 
        zipcode: '96712',
        waveType: 'Reef Break'
      },
        {
        name: 'Ehukai',
        country: 'United States of America',
        state: 'HI',
        city: 'Haleiwa',
        privatebreak: false,
        latitude: 21.665798572475662,      
        longitude: -158.05131317474243, 
        zipcode: '96712',
        waveType: 'Beach Break'
      },
        {
        name: 'Banzai Pipeline',
        country: 'United States of America',
        state: 'HI',
        city: 'Haleiwa',
        privatebreak: false,
        latitude: 21.663929257767446,       
        longitude: -158.05313855499875, 
        zipcode: '96712',
        waveType: 'Reef Break'
      },
        {
        name: "Pua'ena Point",
        country: 'United States of America',
        state: 'HI',
        city: 'Haleiwa',
        privatebreak: false,
        latitude: 21.602378000682247,        
        longitude: -158.10632627012822,  
        zipcode: '96712',
        waveType: 'Reef Break'
      },
        {
        name: "Haleiwa",
        country: 'United States of America',
        state: 'HI',
        city: 'Haleiwa',
        privatebreak: false,
        latitude: 21.594230185592796,         
        longitude: -158.10823759619555,  
        zipcode: '96712',
        waveType: 'Reef Break'
      },
        {
        name: "Makaha",
        country: 'United States of America',
        state: 'HI',
        city: 'Waianae',
        privatebreak: false,
        latitude: 21.477983461683962,          
        longitude: -158.22188220500976,  
        zipcode: '96792',
        waveType: 'Reef Break'
      },
        {
        name: "Kewalos",
        country: 'United States of America',
        state: 'HI',
        city: 'Honolulu',
        privatebreak: false,
        latitude: 21.29052198307225,           
        longitude: -157.85367972706933,  
        zipcode: '96814',
        waveType: 'Reef Break'
      },
        {
        name: "Ala Moana Bowls",
        country: 'United States of America',
        state: 'HI',
        city: 'Honolulu',
        privatebreak: false,
        latitude: 21.2819483683139,           
        longitude: -157.8460356748533,  
        zipcode: '96815',
        waveType: 'Reef Break'
      },
        {
        name: "Canoes",
        country: 'United States of America',
        state: 'HI',
        city: 'Honolulu',
        privatebreak: false,
        latitude: 21.275515184570896,            
        longitude: -157.82606030453877,  
        zipcode: '96815',
        waveType: 'Reef Break'
      },
        {
        name: "Queens",
        country: 'United States of America',
        state: 'HI',
        city: 'Honolulu',
        privatebreak: false,
        latitude: 21.274356726220397,            
        longitude: -157.8252132574907,  
        zipcode: '96815',
        waveType: 'Reef Break'
      },
        {
        name: "Diamond Head",
        country: 'United States of America',
        state: 'HI',
        city: 'Honolulu',
        privatebreak: false,
        latitude: 21.255353680387753,             
        longitude: -157.80519603265853,  
        zipcode: '96815',
        waveType: 'Reef Break'
      },
        {
        name: "Kahana Bay",
        country: 'United States of America',
        state: 'HI',
        city: 'Hauula',
        privatebreak: false,
        latitude: 21.556868906670907,              
        longitude: -157.8750503537696,  
        zipcode: '96717',
        waveType: 'Reef Break'
      },
        {
        name: "Pounders",
        country: 'United States of America',
        state: 'HI',
        city: 'Laie',
        privatebreak: false,
        latitude: 21.63101863653321,               
        longitude: -157.9208853994022,  
        zipcode: '96762',
        waveType: 'Beach Break'
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('surfBreaks', null, {});
  }
};
