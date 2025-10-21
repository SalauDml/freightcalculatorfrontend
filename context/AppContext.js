"use client";
import { useContext,createContext,useState } from "react";


const AppContext = createContext();

export function AppProvider ({children}) {

    const [vehicle, setVehicle] = useState("Semitruck");
    const [formdata, setFormdata] = useState({
        name:"",
        email:"",
        phone:"",
        company:"",
        profile_type:""
    });
    const [costdata, setCostdata] = useState({
      radio: "default",
      defaultPayloads: {
        Semitruck: 45000,
        sprintervan: 3500,
        boxtruck: 10000,
        cargovan: 1500,
      },
      customPayloads: {
        Semitruck: 45000,
        sprintervan: 3500,
        boxtruck: 10000,
        cargovan: 1500,
      },
      variablecosts: {
        fuel: 0.65,
        maintenance: 0.2,
        driver: 0.55,
        miscellaneous: 0.02
      },
      fixedcosts: {
        truck: { price: 600, frequency: "m" },
        insurance: { price: 450, frequency: "m" },
        permits: { price: 80, frequency: "m" },
        licenses: { price: 150, frequency: "m" },
        other: 100
      },
      frequency:"monthly",
      milesdriven: 10000
    });

    const[vehicleinfo,setVehicleinfo]= useState({
        type:"",
        vin:"",
        year:"",
        make:"",
        model:"",
        fuel_type:"",
        avg_mpg:"",
        equipment_type:[],
        endorsements:[],
        extras:""
    });
    const[vehicles,setVehicles] = useState([]);

    const[ratecalc, setRatecalc] = useState({
        origin:"",
        destination:"",
        transport_details:[],
        load_type:"",
        weight:"",
        freight_type:"",
        commodity:"",
        load_details:[],
        paperwork_required:false,
        delivery_date:Date(""),
        delivery_time:"",
        delivery_urgency:"",
        driver_type:"",
        service_level:"",
        tracking_requirements:"",
        special_equipment:[],
        weather_conditions:"",
        season:"",
        fuel_price:"",
        destination_market:""
    })

    return(
        <AppContext.Provider value={{formdata,setFormdata,costdata,setCostdata,vehicleinfo,setVehicleinfo,vehicles,setVehicles,ratecalc,setRatecalc,vehicle,setVehicle}}>
            {children}
        </AppContext.Provider>
    )    
}


export function useAppContext() {
  return useContext(AppContext);
}