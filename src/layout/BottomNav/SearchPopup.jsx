// hooks
import {useForm} from 'react-hook-form';

// utils
import classNames from 'classnames';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

// dynamic components
const Popup = loadable(() => import('components/Popup'));

const SearchPopup = ({open, onClose}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    // do something with the data
    const onSubmit = data => {}

    const handleClose = () => {
        reset();
        onClose(false);
    }

    return (
        <Popup open={open} onClose={handleClose}>
            <div className="flex flex-col gap-4">
                <h3>Search</h3>
                <form className="flex gap-1" onSubmit={handleSubmit(onSubmit)}>
                    <input className={classNames('field', {'field--error': errors.search})}
                           type="search"
                           placeholder="Search for liga soccer..."
                           {...register('search', {required: true})}
                    />
                    <button className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </Popup>
    )
}

SearchPopup.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default SearchPopup