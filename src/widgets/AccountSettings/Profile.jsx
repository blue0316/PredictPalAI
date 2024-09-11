// styling
import styles from './styles.module.scss';

// components
import CustomSelect from '@ui/CustomSelect';
import {PatternFormat} from 'react-number-format';
import {toast} from 'react-toastify';

// hooks
import {useForm, Controller} from 'react-hook-form';
import {useState} from 'react';

// utils
import classNames from 'classnames';
import countryList from 'react-select-country-list';
import {City} from 'country-state-city';

const Profile = () => {
    // eslint-disable-next-line no-unused-vars
    const [selectedCountry, setSelectedCountry] = useState();
    // eslint-disable-next-line no-unused-vars
    const [selectedCity, setSelectedCity] = useState();
    const [cities, setCities] = useState([]);
    const {register, handleSubmit, formState: {errors}, reset, control} = useForm({
        defaultValues: {
            name: 'Lottie Poole',
            phone: '',
            email: '',
            birth: '',
            country: null,
            city: null,
            address: '',
            zip: ''
        }
    });

    const getCountriesOptions = () => {
        let countries = countryList().getData();
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].value === 'RU') {
                countries[i].label = 'Russia [terrorist state]';
            }
        }
        return countries
    }

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setSelectedCity(null);
        let options = [];
        const rawData = City.getCitiesOfCountry(country.value);
        rawData.map(item => options.push({value: item.name, label: item.name}));
        setCities(options);
    }

    // do something with the form data
    const onSubmit = (data) => {
        toast.success('Your changes have been successfully saved!')
    }

    return (
        <form className="d-flex flex-column g-20" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.row}>
                <input className={classNames('field', {'field--error': errors.name})}
                       type="text"
                       defaultValue="Lottie Poole"
                       placeholder="Name"
                       {...register('name', {required: true})} />
                <Controller name="phone"
                            control={control}
                            render={({field}) => (
                                <PatternFormat className={classNames('field', {'field--error': errors.phone})}
                                               placeholder="Phone"
                                               format="+1 (###) ###-####"
                                               mask="_"
                                               getInputRef={field.ref}
                                />
                            )}
                />
            </div>
            <div className={styles.row}>
                <input className={classNames('field', {'field--error': errors.email})}
                       type="text"
                       placeholder="Email"
                       {...register('email', {pattern: /^\S+@\S+$/i})} />
                <Controller name="birth"
                            control={control}
                            render={({field}) => (
                                <PatternFormat className={classNames('field', {'field--error': errors.birth})}
                                               placeholder="Birth date"
                                               format="##/##/####"
                                               mask="_"
                                               getInputRef={field.ref}
                                               value={field.value}
                                               onChange={field.onChange}
                                />
                            )}
                />
            </div>
            <div className={styles.row}>
                <Controller
                    name="country"
                    control={control}
                    render={({field}) => {
                        return (
                            <CustomSelect
                                options={getCountriesOptions()}
                                value={field.value}
                                onChange={(value) => {
                                    field.onChange(value);
                                    handleCountryChange(value);
                                }}
                                placeholder="Country"
                                isSearchable={true}
                                variant="basic"
                                innerRef={field.ref}
                            />
                        )
                    }}
                />
                <Controller
                    name="city"
                    control={control}
                    render={({field}) => {
                        return (
                            <CustomSelect
                                options={cities}
                                value={field.value}
                                onChange={(value) => {
                                    field.onChange(value);
                                    setSelectedCity(value);
                                }}
                                placeholder="City"
                                isSearchable={true}
                                variant="basic"
                                innerRef={field.ref}
                            />
                        )
                    }}
                />
            </div>
            <div className={styles.row}>
                <input className={classNames('field', {'field--error': errors.address})}
                       type="text"
                       placeholder="Address"
                       {...register('address')} />
                <input className={classNames('field', {'field--error': errors.zip})}
                       type="text"
                       placeholder="Postal code"
                       {...register('zip', {pattern: /^\d{5}(?:[-\s]\d{4})?$/i})} />
            </div>
            <div className={styles.footer}>
                <button className="btn" type="submit">Update Profile</button>
                <button className="btn btn--outlined" type="reset" onClick={reset}>Cancel</button>
            </div>
        </form>
    )
}

export default Profile