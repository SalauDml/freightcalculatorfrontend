"use client";
import React from 'react'
import { useState, useEffect } from 'react'

function Step3fixedcosts({ radio }) {
    const defaultValues = {
        truck: 600,
        insurance: 450,
        permits: 80,
        licenses: 150,
        other: 100
    };

    const[fixedcosts,setFixedCosts] = useState(defaultValues);

    // Reset to default values when radio button changes
    useEffect(() => {
        setFixedCosts(defaultValues);
    }, [radio]);

  return (
    <div className='bg-gray-100 p-4 rounded-sm'>
        <h1 className='font-bold'>Fixed Costs (All values in $)</h1>

        <label className='block text-[12px] mt-3'>Truck Payments/ Lease</label>
        <div className='flex gap-2'>
            <input
                className='flex-1 border-2 border-gray-500 rounded-md p-2'
                type="number"
                value={fixedcosts.truck}
                onChange={(e) => setFixedCosts({...fixedcosts, truck: e.target.value})}
                disabled={radio === "default"}
            />
            <select className='border-2 border-gray-500 p-2' disabled={radio === "default"}>
                <option value="m">Monthly</option>
                <option value="q">Quarterly</option>
                <option value="a">Annually</option>
            </select>
        </div>
        <label className='block text-[12px] mt-3'>Insurance</label>
        <div className='flex gap-2'>
            <input
                className='flex-1 border-2 border-gray-500 rounded-md p-2'
                type="number"
                value={fixedcosts.insurance}
                onChange={(e) => setFixedCosts({...fixedcosts, insurance: e.target.value})}
                disabled={radio === "default"}
            />
            <select className='border-2 border-gray-500 p-2 rounded-sm' disabled={radio === "default"}>
                <option value="m">Monthly</option>
                <option value="q">Quarterly</option>
                <option value="a">Annually</option>
            </select>
        </div>
        <label className='block text-[12px] mt-3'>Permits & Registration</label>
        <div className='flex gap-2'>
            <input
                className='flex-1 border-2 border-gray-500 rounded-md p-2'
                type="number"
                value={fixedcosts.permits}
                onChange={(e) => setFixedCosts({...fixedcosts, permits: e.target.value})}
                disabled={radio === "default"}
            />
            <select className='border-2 border-gray-500 p-2 rounded-sm' disabled={radio === "default"}>
                <option value="m">Monthly</option>
                <option value="q">Quarterly</option>
                <option value="a">Annually</option>
            </select>
        </div>
        <label className='block text-[12px] mt-3'>Licenses & Certifications</label>
        <div className='flex gap-2'>
            <input
                className='flex-1 border-2 border-gray-500 rounded-md p-2'
                type="number"
                value={fixedcosts.licenses}
                onChange={(e) => setFixedCosts({...fixedcosts, licenses: e.target.value})}
                disabled={radio === "default"}
            />
            <select className='border-2 border-gray-500 p-2 rounded-sm' disabled={radio === "default"}>
                <option value="m">Monthly</option>
                <option value="q">Quarterly</option>
                <option value="a">Annually</option>
            </select>
        </div>
        <label className='block text-[12px] mt-3'>Other fixed Costs</label>
        <div className='flex gap-2'>
            <input
                className='flex-1 border-2 border-gray-500 rounded-md p-2'
                type="number"
                value={fixedcosts.other}
                onChange={(e) => setFixedCosts({...fixedcosts, other: e.target.value})}
                disabled={radio === "default"}
            />
            <select className='border-2 border-gray-500 p-2 rounded-sm' disabled={radio === "default"}>
                <option value="m">Monthly</option>
                <option value="q">Quarterly</option>
                <option value="a">Annually</option>
            </select>
        </div>
    </div>
  )
}

export default Step3fixedcosts