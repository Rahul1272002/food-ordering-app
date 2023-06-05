import {useForm} from 'react-hook-form'
import Button from './elements/Button'
import {ReactComponent as ArrowRightSvg} from "../assets/icons/arrow-right-long-svgrepo-com.svg"
import {useDispatch} from "react-redux"
import { setAddress } from '../stores/Userinfo/addressSlice'

export const AddressForm=({onTabSwitch})=>{
    const {register,handleSubmit,formState :{errors}}=useForm();
   const dispatch=useDispatch()


    const onSubmit=(data)=>{
        dispatch(setAddress(data))
        onTabSwitch('Payment')
    }
    return (
            <form className='md:w-2/3 md:mx auto px-3 pt-1' onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='pt-4 text-2xl md:text-center'> Address for the delivery</h3>
                    <div className='mb-4'> 
                        <label className='block mb-2 text-sm font-bold text-gray-700' for="streetAddress">Street Address</label>
                    <input 
                    {...register('address',{required:true})}
                    type="text" placeholder='Street Address' id="Stress Address" className='w-full px-3 mb-3 py-2 text-sm leding-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'/>
                    </div>
                    {errors.address && <span className='text-red-500'>This field is require</span>}
                    <div className='mb-4 md:flex md:justify-between'>
                        <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                        <label className='block mb-2 text-sm font-bold text-gray-700' for="city">City Address</label>
                    <input 
                    {...register('city')} 
                    type="text" placeholder='City' id="city" className='w-full px-3 mb-3 py-2 text-sm leding-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'/>
                        </div>

                   
                        <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                        <label className='block mb-2 text-sm font-bold text-gray-700' for="state">State</label>
                    <input 
                    {...register('state')}
                    type="text" placeholder='State' id="state" className='w-full px-3 mb-3 py-2 text-sm leding-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'/>
                        </div>
                    </div>
                    <div className='mb-4 md:flex md:justify-between'>
                        <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                        <label className='block mb-2 text-sm font-bold text-gray-700' for="country">Country</label>
                    <input 
                    {...register('country')}
                    type="text" placeholder='Country' id="country" className='w-full px-3 mb-3 py-2 text-sm leding-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'/>
                        </div>

                   
                        <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                        <label className='block mb-2 text-sm font-bold text-gray-700' for="postalCode">Postal Code</label>
                    <input 
                    {...register('postalCode')}
                    type="text" placeholder='Postal Code' id="postalCode" className='w-full px-3 mb-3 py-2 text-sm leding-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'/>
                        </div>

                    </div>
                    <div className='flex justify-end p-2'>
                        <Button variant='dark' className='flex items-center'  type='submit' ><span className='mr-1'>Next</span><ArrowRightSvg/></Button>

                    </div>
            </form>
    )
}